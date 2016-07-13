# eslint-plugin-lint-demo

I&#39;m showing people how to make a linter!

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-lint-demo`:

```
$ npm install eslint-plugin-lint-demo --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-lint-demo` globally.

## Usage

Add `lint-demo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lint-demo"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lint-demo/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





