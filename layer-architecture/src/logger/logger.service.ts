import path from 'path';
import winston from 'winston';

export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    const logsDirectory = 'src/logger/files';
    const errorLogPath = path.join(logsDirectory, 'error.log');
    const combineLogPath = path.join(logsDirectory, 'combine.log');

    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.simple(),
      ),

      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
        }),
        new winston.transports.File({ filename: errorLogPath, level: 'error' }),
        new winston.transports.File({ filename: combineLogPath }),
      ],
    });
  }

  public logInfo(message: string): void {
    this.logger.info(message);
  }

  public logError(message: string) {
    this.logger.error(message);
  }
}
