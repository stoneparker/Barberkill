"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const schedule_controller_1 = require("../controllers/schedule.controller");
class ScheduleRouter {
    constructor() {
        this.application = express_1.Router();
    }
    applyRoutes() {
        this.application.post('/schedules', schedule_controller_1.ScheduleController.store);
        this.application.get('/schedules', schedule_controller_1.ScheduleController.index);
        return this.application;
    }
}
exports.scheduleRouter = new ScheduleRouter();