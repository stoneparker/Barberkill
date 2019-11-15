"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const employee_controller_1 = require("../controllers/employee.controller");
class EmployeeRouter {
    constructor() {
        this.application = express.Router();
    }
    applyRoutes() {
        this.application.post('/employees/:cep_id', employee_controller_1.EmployeeController.store);
        this.application.get('/employees', employee_controller_1.EmployeeController.index);
        return this.application;
    }
    ;
}
exports.employeeRouter = new EmployeeRouter();
