function gh_rollback () {
  VERSION=`node -e "console.log(require('./package.json').version)"`

  if [[ `git log --format=\"%s\" -1` = \"$VERSION\" ]]; then
    git reset --hard HEAD~1
    git tag -d "v$VERSION"
  else
    echo 'Last commit was not a tag !';
  fi;
}

function gh_release() {
  [ -z "$1" ] && echo "Need a release version" && return;
  npm version $1
  git pf
  VERSION=$(node -e "console.log(require('./package.json').version);")

  # git remote set-head origin main
  # git remote set-head origin master
  echo "Creating tag $VERSION";

  hub pull-request -b $(git default) --browse -m "Release $VERSION"

  if [ $? -eq 0 ]; then
    echo "DONE"
  else
    echo "reverting tag $VERSION"
    gh_rollback
    echo "Maybe try with your default branch"
    echo "git symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main"
  fi
}