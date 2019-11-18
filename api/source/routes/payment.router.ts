import { Router } from 'express';
import { Routers } from '../config/Router';
import { PaymentController } from '../controllers/payment.controller';

class PaymentRouter implements Routers {
  application: Router = Router();
  applyRoutes(){

    this.application.post('/payments', PaymentController.store);
    this.application.get('/payments', PaymentController.index);
    
    return this.application
  }
}

export const paymentRouter = new PaymentRouter();