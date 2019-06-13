"use strict";

const npsUtils = require("nps-utils");

module.exports = {
  scripts: {
    default: {
      script: "node server.js",
      description: "runs server"
    },
    dev: {
      default: {
        script: "nodemon server.js",
        description:
          "runs server using nodemon for restart server on file change"
      }
    },
    test: 'echo "Error: no test specified" && exit 1',
    prettier: {
      default: {
        script: "nps prettier.quick",
        description: "runs pretty quick on all files staged for commit"
      },
      watch: {
        script:
          'onchange "**/*.js" -- prettier --config .prettier.json *.js --write {{changed}}',
        description: "runs prettier on change of file"
      },
      fix: {
        script: "prettier --config .prettier.json *.js --write",
        description: "runs prettier on all source files"
      },
      quick: {
        script: "pretty-quick --staged",
        description: "runs prettier formatting on all staged files"
      }
    },
    // TODO: run lint, test scripts
    // returns 'ng lint && ng test'
    // validate: npsUtils.series.nps('lint', 'test --coverage'),
    validate: npsUtils.series.nps("prettier.quick")
  }
};
