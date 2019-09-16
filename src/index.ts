import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const readDir = promisify(fs.readdir);
const isExists = promisify(fs.exists)
const createDir = promisify(fs.mkdir);

const createDirIfNeeded = async (path) => {
  if (!fs.existsSync(path)) {
    await createDir(path)
  }
};
const move = promisify(fs.rename);

const getFileEnding = (fileName): string => fileName.split('.').pop();

const createFolders = (_path, folders): Promise<void>[] => {
  return folders.map(folder => createDirIfNeeded(path.join(_path, folder)))
}

export const groupFilesByFileEndings = async (pathToFolder: string): Promise<void> => {
  const files = await readDir(pathToFolder);
  const fileEndings = files.reduce((accm, file) => [...accm, getFileEnding(file)], [])
  await Promise.all(createFolders(pathToFolder, fileEndings))
  files.forEach(file => {
    const fileEnding = getFileEnding(file);
    return move(path.join(pathToFolder, file), path.join(pathToFolder, fileEnding, file))
  });

}

