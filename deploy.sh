git commit -am "Save local changes"
cp -R ./build/ ../pwa-tips
cd ..
cd pwa-tips
git checkout -B gh-pages
git add -f build
git commit -am "Rebuild website"
git filter-branch -f --prune-empty --subdirectory-filter build
git push -f origin gh-pages
git checkout -
