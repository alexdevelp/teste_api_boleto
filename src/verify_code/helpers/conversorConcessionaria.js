import { modulo10 } from "./modulo10.js";
import { modulo11Concessionaria } from './modulo11C.js';
import AppError from '../../shared/errors/AppError.js'

const conversorConcessionaria = ( codigo )=> {

  let codigoBarras = '';

  for (let index = 0; index < 4; index++) {
    const start = (11 * (index)) + index;
    const end = (11 * (index + 1)) + index;
    codigoBarras += codigo.substring(start, end);
  }

  const cod = Array.from(codigoBarras.toString()).map(Number)
  const codigoMoeda = Number(cod[2]);
  const DV = Number(cod[3]);
  const bloco = codigoBarras.substring(0, 3) + codigoBarras.substring(4);

  let modulo;

  if (codigoMoeda === 6 || codigoMoeda === 7) {
      modulo = modulo10;
  } else if (codigoMoeda === 8 || codigoMoeda === 9) {
      modulo = modulo11Concessionaria;
  } else {
    throw new AppError('Código inválido.');
  }

  return modulo(bloco) === DV;


}

export default conversorConcessionaria;