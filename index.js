const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./__utils__/generate-page.js');
const generatePage = require('./src/page-template');