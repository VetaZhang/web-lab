module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'parserOptions': {
    'ecmaVersion': 6,//也就是ES6语法支持的意思
    'sourceType': 'module',
    'ecmaFeatures': {
      'modules': true
    },
    'project': './tsconfig.json'
  },
  rules: {
    /* 变量 */
    'no-var': 'error', // 禁止使用 var
    'no-undef-init': 'error', //禁止将变量初始化为 undefined
    'no-undefined': 'error', //禁止将 undefined 作为标识符
    'no-unused-vars': 'error', //禁止出现未使用过的变量
    'no-use-before-define': 'error', // 禁止在变量定义之前使用它们
    /* 基本书写 */
    'no-dupe-args': 'error', // 禁止 function 定义中出现重名参数
    'no-dupe-keys': 'error', // 禁止对象字面量中出现重复的 key
    'no-duplicate-case': 'error', // 禁止出现重复的 case 标签
    'no-func-assign': 'error', // 禁止对 function 声明重新赋值
    'no-sparse-arrays': 'error', // 禁用稀疏数组
    'no-template-curly-in-string': 'error', // 禁止在常规字符串中出现模板字面量占位符语法
    'no-unexpected-multiline': 'error', // 禁止出现令人困惑的多行表达式
    'no-unreachable': 'error', // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    'no-unsafe-negation': 'error', // 禁止对关系运算符的左操作数使用否定操作符
    'use-isnan': 'error', // 要求使用 isNaN() 检查 NaN
    'array-callback-return': 'error', // 强制数组方法的回调函数中有 return 语句
    'complexity': 'off', // 指定程序中允许的最大环路复杂度
    'curly': 'error', // 强制所有控制语句使用一致的括号风格
    'default-case': 'error', // 要求 switch 语句中有 default 分支
    'no-multi-assign': 'error', // 禁止连续赋值
    /* 风格 */
    'no-trailing-spaces': 'error', // 禁用行尾空格
    /* TS */
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/interface-name-prefix': ['error', { "prefixWithI": "always" }],
    "@typescript-eslint/semi": ['error'],
    "@typescript-eslint/member-delimiter-style": ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
    }]
  }
}