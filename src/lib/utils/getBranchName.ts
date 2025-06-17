import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

type BranchResult =
  | {
      success: true;
      branchName: string;
    }
  | {
      success: false;
      error: string;
    };

/**
 * Gets the current git branch name for a given folder path
 * @param folderPath - The path to the folder to check
 * @returns Promise with success status and branch name or error message
 */
export async function getBranchName(folderPath: string): Promise<BranchResult> {
  try {
    // Check if the folder exists
    if (!existsSync(folderPath)) {
      return {
        success: false,
        error: 'Folder does not exist',
      };
    }

    // Check if it's a git repository by looking for .git folder/file
    const gitPath = join(folderPath, '.git');
    if (!existsSync(gitPath)) {
      return {
        success: false,
        error: 'Not a git repository (no .git folder found)',
      };
    }

    // Check if git is installed by trying to run git --version
    try {
      execSync('git --version', {
        stdio: 'pipe',
        timeout: 5000, // 5 second timeout
      });
    } catch (gitCheckError) {
      return {
        success: false,
        error: 'Git is not installed or not available in PATH',
      };
    }

    // Try to get the branch name using git command
    try {
      const branchName = execSync('git rev-parse --abbrev-ref HEAD', {
        cwd: folderPath,
        encoding: 'utf8',
        stdio: 'pipe',
        timeout: 10000, // 10 second timeout
      }).trim();

      return {
        success: true,
        branchName: branchName,
      };
    } catch (gitBranchError) {
      // If the above fails, try alternative method
      try {
        const branchName = execSync('git branch --show-current', {
          cwd: folderPath,
          encoding: 'utf8',
          stdio: 'pipe',
          timeout: 10000,
        }).trim();

        return {
          success: true,
          branchName: branchName,
        };
      } catch (altError) {
        return {
          success: false,
          error: `Failed to get branch name: ${gitBranchError}`,
        };
      }
    }
  } catch (error) {
    return {
      success: false,
      error: `Unexpected error: ${error}`,
    };
  }
}

// Example usage:
/*
// Sync version
(async () => {
  const syncResult = await getBranchName('./src');
  if (syncResult.success) {
    console.log('Current branch:', syncResult.branchName);
  } else {
    console.error('Error:', syncResult.error);
  }
})()
// */
