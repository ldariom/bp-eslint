# BpEslint
Test bench with steps to follow to install eslint, husky and lint-staged

### Prepare

 `ng new bp-eslint`
 `ng add @angular-eslint/schematics`
 `npm i prettier --save-dev`

Now we need to tell the compiler to use prettier:

We create in the root of the project .prettierrc.json:

```
{
    "singleQuote": true,
    "printWidth": 120,
    "useTabs": false,
    "tabWidth": 2,
    "htmlWhitespaceSensitivity": "css",
    "trailingComma": "all",
    "bracketSpacing": true,
    "endOfLine": "auto"
}
``` 


add .prettierignore in the project root :

 `npm install husky -D`
 `npm pkg set scripts.prepare="husky install"`
 `npm run prepare`


Add the following configuration to the visual code settings.json file:

  `"editor.codeActionsOnSave": {
    "source.organizeImports": true,
    "source.fixAll.eslint": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }`


add in package.json a new line in script:

`"prettier:check": "prettier --check \"src/app/**/*.{json,css,scss,md,ts,html}\""`

# Pending topic

Warring in lint-staged:
 `Some of your tasks use `git add` command. Please remove it from the config since all modifications made by tasks will be automatically added to the git commit index.`