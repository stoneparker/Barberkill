
import * as express from 'express';
import { Router } from '../config/Router';
import { EmployeeController } from '../controllers/employee.controller';

class EmployeeRouter implements Router {
  application: express.Router = express.Router()
  applyRoutes(){
    // Inserir um usuário
    this.application.post('/employees/:cep_id', EmployeeController.store)
    //Mostrar todos
    this.application.get('/employees', EmployeeController.index);
    //Mostrar um
    this.application.get('/employees/:id', EmployeeController.show);
    return this.application;
  };
}

export const employeeRouter = new EmployeeRouter();