#!/bin/sh

setup_git() {
  git config --global user.email "mst10041967@gmail.com"
  git config --global user.name "Rohit Tanwar"
}

commit_website_files() {
  git checkout -b gh-pages
  git add . *.html
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-pages https://${GH_KEY}@github.com/kriadmin/30-seconds-of-python-code.git > /dev/null 2>&1
  git push --quiet --set-upstream origin-pages gh-pages 
}

setup_git
commit_website_files
upload_files
