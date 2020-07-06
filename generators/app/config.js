module.exports = {
  options: {},
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: '项目名',
    },
    {
      type: 'list',
      name: 'language',
      message: '开发语言',
      choices: [{ value: 'Typescript', checked: true }, { value: 'Javascript' }],
    },
  ],
  filesToCopy: [
    {
      input: 'src/index.js',
      output: 'src/index.js',
    },
    {
      input: '.commitlintrc.js',
      output: '.commitlintrc.js',
    },
    {
      input: '.editorconfig',
      output: '.editorconfig',
    },
    {
      input: '.eslintignore',
      output: '.eslintignore',
    },
    {
      input: '.gitignore',
      output: '.gitignore',
    },
    {
      input: '.huskyrc.js',
      output: '.huskyrc.js',
    },
    {
      input: '.lintstagedrc.js',
      output: '.lintstagedrc.js',
    },
    {
      input: '.prettierrc',
      output: '.prettierrc',
    },
  ],
  filesToCopyInTypescript: [
    {
      input: 'tsconfig.json',
      output: 'tsconfig.json',
    },
  ],
  filesToRender: [
    {
      input: '_.eslintrc',
      output: '.eslintrc',
    },
    {
      input: '_package.json',
      output: 'package.json',
    },
  ],
};
