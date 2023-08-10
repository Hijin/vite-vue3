module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended", 
    "plugin:@typescript-eslint/recommended", 
    "plugin:vue/vue3-essential", 
    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint", 
    "vue", 
    "prettier",
    "simple-import-sort"
  ],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off",
    "simple-import-sort/imports": [
        "error", 
        {
          groups: [
            [
              '^vue', // vue放在首行
              '^@?\\w', // 以字母(或数字或下划线)或“@”后面跟着字母开头的东西,通常为nodeModules引入
              '^@(/.*|$)', // 内部导入 "@/"
              '^\\.\\.(?!/?$)', // 父级导入. 把 `..` 放在最后.
              '^\\.\\./?$',
              // 同级导入. 把同一个文件夹.放在最后
              '^\\./(?=.*/)(?!/?$)',
              '^\\.(?!/?$)',
              '^\\./?$',
              '^.+\\.?(css|less|scss)$', // 样式导入.
              '^\\u0000', // 带有副作用导入，比如import 'a.css'这种.
            ],
          ]
        }
      ]
  }
}
