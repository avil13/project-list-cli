const logMessages = {
  help: '[ help, ls, add (in folder), rm (in folder)]',
  configCreated(filePath: string = '') {
    return `Config created in: "${filePath}"`;
  },
  emptyProjectList: 'You don\'t have any projects added right now.',
  addProject: 'To add a project. Go to the folder and run the command "pp add"',
  chooseProject: 'Choose project:',
};

export {logMessages};
