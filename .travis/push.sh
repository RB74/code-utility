setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  echo "$TRAVIS_EVENT_TYPE $TRAVIS_BRANCH"
  if [[ $(( $TRAVIS_EVENT_TYPE )) != 'pull_request' ]]; then
    if [[ $(( $TRAVIS_BRANCH )) == 'master' ]]; then
      echo "Commiting to master branch..."
      git checkout master
      git add *
      git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
    fi
  fi
}

upload_files() {
  if [[ $(( $TRAVIS_EVENT_TYPE )) != 'pull_request' ]]; then
    if [[ $(( $TRAVIS_BRANCH )) == 'master' ]]; then
      echo "Pushing to master branch..."
      git push --force --quiet "https://${GH_TOKEN}@github.com/Chalarangelo/30-seconds-of-code.git" master > /dev/null 2>&1
    fi
  fi
}

setup_git
commit_website_files
upload_files
