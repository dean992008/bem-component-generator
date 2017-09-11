const fs = require('fs');
const argv = require('yargs').argv;
const changeCase = require('change-case');

module.exports = function () {
    const name = argv.name;
    const ts = argv.ts;
    const sass = argv.sass;
    if (!name.length) {
        return;
    }
    if (!ts && !sass) {
        return;
    }
    if (!fs.existsSync('./bem/' + name)) {
        fs.mkdirSync('./bem/' + name);
    }
    if (sass && !fs.existsSync('./bem/' + name + '/' + name + '.sass')) {
        fs.writeFileSync('./bem/' + name + '/' + name + '.sass', '.' + name);
        fs.appendFileSync('./bem/entry.sass', '\n@import \'./' + name + '/' + name + '\'');
    }
    if (ts && !fs.existsSync('./bem/' + name + '/' + name + '.ts')) {
        const className = changeCase.pascalCase(name);
        const code = `export class ${className} {
	constructor(){
        
    }
}`;
        fs.writeFileSync('./bem/' + name + '/' + name + '.ts', code);
    }
}