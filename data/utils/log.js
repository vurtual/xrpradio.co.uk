const fs = require("fs");
const path = require("path");
const { getDateTime } = require("./dates");

const logToFile = (message, logToConsole = true) => {
  if (logToConsole) console.log(message);
  const logPath = path.join(__dirname, `${getDateTime(today)} - log.txt`);
  fs.appendFileSync(logPath, `${now} - ${message}\n`);
};
