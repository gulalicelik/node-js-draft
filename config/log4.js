const log4js = require("log4js");

//LOG_PATH

const logPath =
  process.env.NODE_ENV === "production" ? process.env.LOG_PATH : "logs/log.log";

log4js.configure({
  replaceConsole: true,
  appenders: {
    cheese: {
      //  set the type as dateFile
      type: "dateFile",
      //  configuration file name myLog.log
      filename: logPath,
      //  specifies the encoding format as utf-8
      encoding: "utf-8",
      //  configuration layout， custom patterns are used here pattern
      layout: {
        type: "pattern",
        //  configuration patterns are described below
        pattern:
          '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}'
      },
      //  log files by date （ day ） cutting
      pattern: "-yyyy-MM-dd",
      //  when rolling back old log files, make sure to  .log  at the end （ only in the alwaysIncludePattern  for false  to take effect ）
      keepFileExt: true,
      //  the output log file name is always included pattern  end date
      alwaysIncludePattern: true
    }
  },
  categories: {
    //  set default categories
    default: { appenders: ["cheese"], level: "debug" }
  }
});

module.exports = log4js.getLogger("cheese");
