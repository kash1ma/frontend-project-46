#!/usr/bin/env node
import { program } from "commander";
import genDiff from "../src/index.js";
import process from "process";

program
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0", "-V, --version", "output the version number")
  .option(
    "-f, --format, <type>",
    "output format [stylish, json, plain]",
    "stylish"
  )
  .option("--colors", "lol")
  .option("--runInBand", "lol")
  .option("--bail", "lol")
  .arguments("<filepath1> <filepath2>")
  .helpOption("-h, --help", "output usage information")
  .action((filepath1, filepath2) =>
    console.log(genDiff(filepath1, filepath2, program.opts().format))
  )
  .parse(process.argv);
