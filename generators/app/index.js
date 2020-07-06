const Generator = require('yeoman-generator');
const config = require('./config');

class GeneratorLib extends Generator {
  async prompting() {
    this.answers = await this.prompt(config.prompts);
  }

  writing() {
    this.log('---开始创建项目---');

    const templateData = {
      appname: this.answers.appname || this.appname,
      language: this.answers.language,
    };

    let { filesToCopy } = config;
    if (this.answers.language === 'Typescript') {
      filesToCopy = [...filesToCopy, ...config.filesToCopyInTypescript];
    }
    filesToCopy.forEach(file => {
      this.fs.copy(this.templatePath(file.input), this.destinationPath(file.output));
    });

    config.filesToRender.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file.input),
        this.destinationPath(file.output),
        templateData,
      );
    });
  }

  install() {
    this.log('---开始安装依赖---');

    this.npmInstall();
  }

  end() {
    this.log('---项目生成完毕---');
  }
}

module.exports = GeneratorLib;
