
import validarBLOCOS from '../helpers/validarBlocos.js';
import AppError from '../../shared/errors/AppError.js'
import conversorConcessionaria from '../helpers/conversorConcessionaria.js'
import dadosBoletoConcessionaria from '../helpers/dadosBoletoConcessionaria.js';


const boletoConcessionaria = (codigo) => { 

    if (!/^[0-9]{48}$/.test(codigo)){
        throw new AppError('Código inválido')
    };

    const validandoDV =  conversorConcessionaria(codigo);
    const validandoBLOCOS = validarBLOCOS(codigo);
   
    if (!validandoDV && validandoBLOCOS) {
        throw new AppError('Código inválido')
    }
  
    const infosBoleto = dadosBoletoConcessionaria(codigo);

    return infosBoleto;
}

export default boletoConcessionaria;