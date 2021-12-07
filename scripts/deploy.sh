#!/usr/bin/env sh
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
PROG="$(basename "$0")"
USER="${SUDO_USER:-${USER}}"
HOME="${USER_HOME:-${HOME}}"
cd $PWD || exit 1
# - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
printf '%s\n' "deploying website in $(basename "$PWD")"
rm -Rf ./dist ./docs
npm run build || exitCode=1
touch ./dist/.nojekyll
echo mpmalak.com >./dist/CNAME
mv -fv ./dist ./docs
if [ -d "./docs" ] && [ "${exitCode:-0}" -eq 0 ]; then
  gitcommit deploy docs/ && exitCode=0 || exitCode=1
else
  printf '%s\n' "Failed to deploy website"
  exitCode=1
fi

exit ${exitCode:-$?}
