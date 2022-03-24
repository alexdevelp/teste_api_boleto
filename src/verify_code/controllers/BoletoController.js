import boletoTitulo from "../services/boletoTitulo.js";
import boletoConcessionaria from "../services/boletoConcessionaria.js";

export default class BoletoController {
    verify(req, res, next){

        const codigo = Array.from(req.params.code.toString()).map(Number);

        const verified = (codigo[0] === 8 ? boletoConcessionaria(req.params.code) : boletoTitulo(req.params.code))

        return res.status(200).send(verified);
    };
};