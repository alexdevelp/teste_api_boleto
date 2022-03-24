import { Router } from 'express';
import boletoRouter from '../../../verify_code/routes/boleto.routes.js';

const routes = Router();

routes.use('/boleto', boletoRouter);

export default routes;