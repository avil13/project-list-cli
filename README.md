# project-list-cli

```sh
npm install -g project-list-cli
```

```sh
# Add function in .bashrc OR .zshrc

pp() {
  project-list $1
  if [[ -z $1 || "$1" == "ls" ]]; then
    if [ "$?" == "0"]; then
      DIR_TO_MOVE=$(node -p -e "require('$HOME/.project-list.json').lastProjectPath")
      cd $DIR_TO_MOVE
    fi
  fi
}

```

