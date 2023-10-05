const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

function clearLogFiles() {
  if (fs.existsSync(logsDir)) {
    const files = fs.readdirSync(logsDir);
    if (files.length > 0) {
      console.log('Files to delete:');
      files.forEach((file) => {
        console.log(file);
        fs.unlinkSync(path.join(logsDir, file));
      });
    }
    fs.rmdirSync(logsDir);
  }
}

function createLogFiles() {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    process.chdir(logsDir);
    console.log('Created Logs directory.');
  }

  const logFileNames = [];

  for (let i = 1; i <= 10; i++) {
    const logFileName = `log${i}.txt`;
    fs.writeFileSync(logFileName, 'Some text goes here.');
    logFileNames.push(logFileName);
  }

  console.log('Created log files:');
  logFileNames.forEach((fileName) => {
    console.log(fileName);
  });
}

clearLogFiles();
createLogFiles();