const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create a sub module for a domain',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/sub-domain',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './domains/__name__',
      pathAndFileNameDefaultCase: '(kebabCase)',
    },
    onComplete: (results) => {
      console.log('Generated successfully!!!');
    },
  },
]);
