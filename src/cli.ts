#!/usr/bin/env node

import * as commander from 'commander';
import { groupFilesByFileEndings } from './index';

commander.action(async () => {
  try {
    await groupFilesByFileEndings(process.cwd())
  } catch (e) {
    console.log('Hooo shit!')
    console.log(e)
  }
}).parse(process.argv)