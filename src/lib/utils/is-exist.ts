import fs from 'fs';
import { promisify } from 'util';

const exists = promisify(fs.exists);

export const isExist = async (pathToFolder: string): Promise<boolean> => exists(pathToFolder);
