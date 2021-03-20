# project-list-cli

 A way to easily navigate to projects in the terminal.

 Quickly switch to the right project.

![project-list-cli demo](https://raw.githubusercontent.com/avil13/project-list-cli/master/assets/project-list-demo.gif)

 ## Installation:

```sh
npm install -g project-list-cli
```

```sh
# Add function in .bashrc OR .zshrc

pp() {
  project-list $1
  if [[ -z $1 || "$1" == "ls" ]]; then
    DIR_TO_GO=$(node -p -e "require('$HOME/.project-list.json').lastProjectPath")
    if [ ! -z "$DIR_TO_GO" ];then
      cd $DIR_TO_GO
    fi
  fi
}

```

A configuration file will be created automatically in your home directory `~/.project-list.json`

## Commands:

 command | description
|:---|:---|
ls   | show a list of projects
add  | add a project to the list, while in the project folder
rm   | remove project from list, while in the project folder
help | show help
