#!/usr/bin/env sh
# abort on errors
# build
yarn run build
# navigate into the build output directory
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git add dist
git commit -m 'deploy'
git subtree push --prefix dist origin gh-pages
cd -