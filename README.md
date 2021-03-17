# project-list-cli

```sh
npm install -g project-list-cli
```

```sh
# Add function in .bashrc OR .zshrc

pp() {
  project-list $1
  if [[ -z $1 || "$1" == "ls" ]]; then
    DIR_TO_MOVE=$(node -p -e "require('$HOME/.project-list.json').lastProjectPath")
    if [ ! -z $DIR_TO_MOVE ];then
      cd $DIR_TO_MOVE
    fi
  fi
}

```

