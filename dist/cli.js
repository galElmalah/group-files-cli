#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const index_1 = require("./index");
commander.action(() => __awaiter(this, void 0, void 0, function* () {
    try {
        yield index_1.groupFilesByFileEndings(process.cwd());
    }
    catch (e) {
        console.log('Hooo shit!');
        console.log(e);
    }
})).parse(process.argv);
//# sourceMappingURL=cli.js.map