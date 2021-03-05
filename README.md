# Game

## Web Available at

https://myanongithubplace.github.io/game

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploy at Github

0 Upload to dev &&& Delete remote & local 'gh-pages' branch
git push origin dev
git push origin --delete gh-pages
git branch -D gh-pages

1 change branch to 'gh-pages'
git checkout -b gh-pages

2 Comment 'dist' at .gitignore

3 npm run build

4 git add dist && git commit -m "Initial dist subtree commit"

5 git subtree push --prefix dist origin gh-pages

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
