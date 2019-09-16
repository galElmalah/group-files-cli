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
const fs = require("fs");
const path = require("path");
const util_1 = require("util");
const readDir = util_1.promisify(fs.readdir);
const isExists = util_1.promisify(fs.exists);
const createDir = util_1.promisify(fs.mkdir);
const createDirIfNeeded = (path) => __awaiter(this, void 0, void 0, function* () {
    console.log(fs.existsSync(path), path);
    if (!fs.existsSync(path)) {
        yield createDir(path);
    }
});
const move = util_1.promisify(fs.rename);
const getFileEnding = (fileName) => fileName.split('.').pop();
const createFolders = (_path, folders) => {
    return folders.map(folder => createDirIfNeeded(path.join(_path, folder)));
};
exports.groupFilesByFileEndings = (pathToFolder) => __awaiter(this, void 0, void 0, function* () {
    const files = yield readDir(pathToFolder);
    const fileEndings = files.reduce((accm, file) => [...accm, getFileEnding(file)], []);
    yield Promise.all(createFolders(pathToFolder, fileEndings));
    files.forEach(file => {
        const fileEnding = getFileEnding(file);
        return move(path.join(pathToFolder, file), path.join(pathToFolder, fileEnding, file));
    });
});
//# sourceMappingURL=index.js.map