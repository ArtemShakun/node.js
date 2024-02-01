import express, { Express } from 'express';
import { UserController } from './users/users.controller';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  userController: UserController;

  constructor(logger: LoggerService, userController: UserController) {
    this.app = express();
    this.port = 8080;
    this.logger = logger;
    this.userController = userController;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExceptionFilters() {}

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.logInfo(`Server was running on http://localhost:${this.port}`);
  }
}
