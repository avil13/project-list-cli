const logMessages = {
  help: 'HELP: all commands - ls, add (in folder), rm (in folder)',
  fullHelp: [
    '"project-list" help:',
    `list of commands:
  ls  - show a list of projects
  add - add a project to the list, while in the project folder
  rm  - remove project from list, while in the project folder
  up  - update the list of paths, delete broken paths
`,
  ],
  configCreated(filePath = '') {
    return `Config created in: "${filePath}"`;
  },
  emptyProjectList: "You don't have any projects added right now.",
  emptyProjectDir: 'Failed to get the project directory name.',
  addProject: 'To add a project. Go to the folder and run the command "pp add"',
  chooseProject: 'Choose project',
  upUpdated: 'These paths are not relevant and have been removed:',
  upStillSame: 'All paths are up to date',
  infoProjectAdded: 'Added project',
  infoProjectRemoved: 'Removed project',
  warnThisAliasAlreadyExists: 'This alias already exists',
  warnThisPathAlreadyExists: 'This path already exists',
  errorNotFound: 'Project not found in list\nTry running the "ls" command first',
};

export { logMessages };
