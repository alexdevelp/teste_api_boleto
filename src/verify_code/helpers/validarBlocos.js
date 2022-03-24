import { modulo10 } from "./modulo10.js";
import { modulo11Concessionaria } from './modulo11C.js';
import AppError from '../../shared/errors/AppError.js'

const validarBLOCOS = (codigo)=> {

  let modulo;

  const cod = Array.from(codigo.toString()).map(Number);

  const codigoMoeda = Number(cod[2]);

  if (codigoMoeda === 6 || codigoMoeda === 7) {
    modulo = modulo10;
  } else if (codigoMoeda === 8 || codigoMoeda === 9) {
    modulo = modulo11Concessionaria;
  } else {
    throw new AppError('Código inválido.');
 }

  const blocos = Array.from({ length: 4 }, (v, index) => {
    const start = (11 * (index)) + index;
    const end = (11 * (index + 1)) + index;
    return {
        num: codigo.substring(start, end),
        DV: codigo.substring(end, end + 1),
    };
  });

  const validBlocos = blocos.every(e => modulo(e.num) === Number(e.DV));

  return validBlocos;
}

export default validarBLOCOS;