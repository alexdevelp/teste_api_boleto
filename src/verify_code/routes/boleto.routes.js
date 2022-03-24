import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import BoletoController from "../controllers/BoletoController.js";

const boletoRouter = Router();
const boletoController = new BoletoController();

boletoRouter.get(
    '/:code',
    celebrate({
        [Segments.PARAMS]: {
            code: Joi.string().required(),
        },
    }),
    boletoController.verify
);

export default boletoRouter;