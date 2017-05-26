#!/usr/bin/env bash

git branch -f gh-pages
git checkout gh-pages

grunt

echo "/node_modules/" > .gitignore

git add images .gitignore
git commit -m "Published"
git push -u -f origin gh-pages

git checkout master
