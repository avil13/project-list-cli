const logMessages = {
  help: 'HELP: all commands - ls, add (in folder), rm (in folder)',
  configCreated(filePath: string = '') {
    return `Config created in: "${filePath}"`;
  },
  emptyProjectList: 'You don\'t have any projects added right now.',
  addProject: 'To add a project. Go to the folder and run the command "pp add"',
  chooseProject: 'Choose project',
  infoProjectAdded: 'Added project',
  infoProjectRemoved: 'Removed project',
  warnThisAliasAlreadyExists: 'This alias already exists',
  warnThisPathAlreadyExists: 'This path already exists',
  errorNotFound: 'Project not found in list\nTry running the "ls" command first',
};

export {logMessages};
