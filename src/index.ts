#! /usr/bin/env node

const yargs = require("yargs");
const fs = require("fs");
import path = require("path");
import canvas from "./canvas";
const usage = "\nUsage: js-master <template> to quickly generate js templat";

const options = yargs
  .usage(usage)
  .option("l", {
    alias: "list",
    describe: "List all supported template.",
    type: "boolean",
    demandOption: false,
  })
  .option("t", {
    alias: "template",
    describe: "Generate now.",
    type: "string",
    demandOption: false,
  })
  .help(true).argv;

const canvasGenerator = () => {
  fs.mkdirSync(yargs.argv._[0]);
  canvas.forEach((file) => {
    fs.writeFileSync(path.join(yargs.argv._[0], file.fileName), file.content);
  });
  console.log("✨  Done");
};

const list = [
  { template: "canvas", name: "Canvas", generator: canvasGenerator },
];

if (yargs.argv.ls == true || yargs.argv.list == true) {
  console.log("Now js-master have:");

  list.forEach((item) => {
    console.log(`\t${item.name}:\t\t${item.template}`);
  });
}

if (yargs.argv.t || yargs.argv.template) {
  const template = list.find(
    (i) => i.template == (yargs.argv.t || yargs.argv.template)
  );
  if (template?.generator) {
    template.generator();
  } else {
    console.log("ERROR");
  }
}
