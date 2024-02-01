import winston from 'winston';

export class LoggerService {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
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
