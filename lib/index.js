#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargs = require("yargs");
var fs = require("fs");
var path = require("path");
var canvas_1 = require("./canvas");
var usage = "\nUsage: js-master <template> to quickly generate js templat";
var options = yargs
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
var canvasGenerator = function () {
    fs.mkdirSync(yargs.argv._[0]);
    canvas_1.default.forEach(function (file) {
        fs.writeFileSync(path.join(yargs.argv._[0], file.fileName), file.content);
    });
};
var list = [
    { template: "canvas", name: "Canvas", generator: canvasGenerator },
    { template: "canvas", name: "Canvas" },
    { template: "canvas", name: "Canvas" },
];
if (yargs.argv.ls == true || yargs.argv.list == true) {
    console.log("Now js-master have:");
    list.forEach(function (item) {
        console.log("\t".concat(item.name, ":\t\t").concat(item.template));
    });
}
if (yargs.argv.t || yargs.argv.template) {
    var template = list.find(function (i) { return i.template == (yargs.argv.t || yargs.argv.template); });
    if (template === null || template === void 0 ? void 0 : template.generator) {
        template.generator();
    }
    else {
        console.log("ERROR");
    }
}
