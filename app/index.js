var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = AppGenerator;

var separator = '\n=====================================';

function AppGenerator() {
  yeoman.generators.Base.apply(this, arguments);

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());

  this.sourceRoot(path.join(path.dirname(__dirname), 'templates'));
}

util.inherits(AppGenerator, yeoman.generators.Base);

AppGenerator.prototype.someQuestions = function someQuestions() {
  var welcome = chalk.yellow(separator) +
    chalk.yellow.bold('\n') +
    chalk.yellow.bold('\n      |----\\    /----|') +
    chalk.yellow.bold('\n      |     \\  /     |') +
    chalk.yellow.bold('\n      |      \\/      |') +
    chalk.yellow.bold('\n      |              |') +
    chalk.red.bold('\n      |     |\\/|     |ERDIAN') +
    chalk.yellow.bold('\n      |     |  |     |') +
    chalk.yellow.bold('\n      |     |  |     | ') +
    chalk.yellow.bold('\n      |     |  |     | ') +
    chalk.yellow.bold('\n      -------  -------') +
    chalk.yellow.bold('\n') +
    chalk.yellow(separator) +
    chalk.yellow('\n');

  console.log(welcome);

  console.info('Generating your awesome app. Stay tuned ;)');
  console.info(chalk.yellow(separator));
};

AppGenerator.prototype.git = function git() {
  this.copy('common/gitignore', '.gitignore');
  this.copy('common/gitattributes', '.gitattributes');
};

AppGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('common/editorconfig', '.editorconfig');
};

AppGenerator.prototype.jsHint = function jsHint() {
  this.copy('common/jshintrc', '.jshintrc');
};

AppGenerator.prototype.travis = function travis() {
  this.copy('common/travis.yml', 'travis.yml');
};

AppGenerator.prototype.bower = function bower() {
  this.template('common/bower.json', 'bower.json');
  this.copy('common/bowerrc', '.bowerrc');
};

AppGenerator.prototype.readme = function readme() {
  this.template('common/readme.md', 'README.md');
}

AppGenerator.prototype.packageJson = function packageJson() {
  this.template('common/package.json', 'package.json');
};

AppGenerator.prototype.gruntFile = function gruntFile() {
  this.copy('common/Gruntfile.js', 'Gruntfile.js');
};

AppGenerator.prototype.license = function license() {
  this.copy('common/LICENSE-MIT', 'LICENSE-MIT');
};

AppGenerator.prototype.createDirLayout = function createDirLayout() {
  this.mkdir('app');
  this.mkdir('app/styles');
  this.mkdir('app/images');
  this.mkdir('app/components');
  this.mkdir('app/extensions');
  this.mkdir('app/modes');
  this.mkdir('data');
  this.mkdir('tests');
};

AppGenerator.prototype.app = function app() {
  this.copy('app/404.html', 'app/404.html');
  this.template('app/index.html', 'app/index.html');
  this.template('app/main.js', 'app/main.js');
};

AppGenerator.prototype.copylibs = function copylibs() {
  this.directory('common/libs', 'app/libs');
};

AppGenerator.prototype.bpComponents = function bpComponents() {
  this.directory('components/_boilerplate', 'app/components/_boilerplate');
};

AppGenerator.prototype.bpExtensions = function bpExtensions() {
  this.directory('extensions/_boilerplate-extension', 'app/extensions/_boilerplate-extension');
};

/*
AppGenerator.prototype.component = function component() {
  this.invoke('aura:component', {
    args: ['title']
  });
};
*/