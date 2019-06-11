# eslint-config-wiremore

A shared ESLint configuration by [wiremore](https://www.wiremore.com). Rules are carefully selected to be as restrictive as necessary but no more. This config aims to cause as much consistency as possible in a codebase while keeping the code readable even for not-so-experienced developers.

## Installation

Get started by running this command in the root of your project:

```
npm install --save-dev eslint eslint-config-wiremore
```

or

```
yarn add --dev eslint eslint-config-wiremore
```

Afterwards install all peerDependencies into your project:

```
npx install-peerdeps --dev eslint-config-wiremore
```

or:

```
(
  export PKG=eslint-config-wiremore;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Then add an `.eslintrc.json` file to the root of your project before running the eslint command, with the following:

```
{
  "extends": ["wiremore"]
}
```

Optionally you can also add linting for React/JSX:

```
{
  "extends": ["wiremore", "wiremore/react"]
}
```

If you want to use TypeScript, that's fine, we got you covered:

```
{
  "extends": ["wiremore", "wiremore/react", "wiremore/typescript"]
}
```

For more information see: http://eslint.org/docs/user-guide/configuring
