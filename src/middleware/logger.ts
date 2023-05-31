import winston, { format } from "winston";
import morgan from "morgan";

const logger = winston.createLogger({
  level: "info",
  format: format.combine(
    format.timestamp(),
    format.json(),
    format.prettyPrint()
  ),
  transports: [new winston.transports.Console()],
});

const morganLogger = morgan("combined", {
  stream: {
    write: (message: string) => {
      logger.info(message.trim());
    },
  },
});

export { logger, morganLogger };
