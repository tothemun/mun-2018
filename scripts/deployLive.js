'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');
const chalk = require('chalk');

function runBuild(scriptPath, cb) {
  // keep track of whether callback has been invoked to prevent multiple invocations
  var invoked = false;

  var process = childProcess.fork(scriptPath);

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
    if (invoked) return;
    invoked = true;
    cb(err);
  });

  // execute the callback once the process has finished running
  process.on('exit', function (code) {
    if (invoked) return;
    invoked = true;
    var err = code === 0 ? null : new Error('exit code ' + code);
    cb(err);
  });
}

function DeployToS3() {
  var config = {
    s3BucketName: 'testing.tothemun.com',
    folderPath: '../build'
  };

  var s3 = new AWS.S3({ signatureVersion: 'v4' });
  var buildFolderPath = path.join(__dirname, config.folderPath);
  var s3Objects;

  s3.listObjects({
      Bucket: config.s3BucketName
    }, function(err, data) {
      console.log(chalk.cyan('Retrieved S3 file list.'));
      console.log('Emptying Bucket...');
      if (err) console.log(err, err.stack); // an error occurred
      else  {
        for(var object of data.Contents) {
          s3.deleteObject({
            Bucket: config.s3BucketName,
            Key: object.Key
          }, function(err, data) {
            if (err) console.log(err, err.stack);
            else console.log('Deleted S3 file: ' + object.Key);
          });
        }
      }
  });


  fs.readdir(buildFolderPath, (err, files) => {
    if(!files || files.length === 0) {
      console.log(chalk.red(`Provided folder '${buildFolderPath}' is empty or does not exist.`));
      console.log(chalk.red('Make sure your project was compiled!'));
      return;
    }

    console.log(files);

    // for (var fileName of files) {
    //   const filePath = path.join(buildFolderPath, fileName);
    //
    //   // ignore if directory
    //   if (fs.lstatSync(filePath).isDirectory()) {
    //     continue;
    //   }
    //
    //   fs.readFile(filePath, (error, fileContent) => {
    //     // if unable to read file contents, throw exception
    //     if (error) { throw error; }
    //
    //     s3.putObject({
    //       Bucket: config.s3BucketName,
    //       Key: fileName,
    //       Body: fileContent
    //     }, (res) => {
    //       console.log(`Successfully uploaded '${fileName}'!`);
    //     });
    //
    //   });
    // }
  });
}


DeployToS3();
//runBuild('./scripts/build.js', DeployToS3);
