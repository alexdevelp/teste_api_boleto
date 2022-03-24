import { modulo10 } from '../helpers/modulo10.js';
import AppError  from '../../shared/errors/AppError.js'
import tituloBancario from '../helpers/validarBlocosTitulo.js'
import conversorTitulo from '../helpers/conversorTitulo.js';

const boletoTitulo = (codigo) => {
    let validarBlocos = false;

    if (!/^[0-9]{47}$/.test(codigo)){
        throw new AppError('Código inválido')
    };
    
    const blocos = [
        {
            num: codigo.substring(0, 9),
            DV: codigo.substring(9, 10),
        },
        {
            num: codigo.substring(10, 20),
            DV: codigo.substring(20, 21),
        },
        {
            num: codigo.substring(21, 31),
            DV: codigo.substring(31, 32),
        },
    ]
    
    const validBlocos = validarBlocos ? blocos.every(e => modulo10(e.num) === Number(e.DV)) : true;
    const convertCode = tituloBancario(conversorTitulo(codigo));

    if(! validBlocos && convertCode.status){
        throw new AppError('Código inválido')
    }

    const infosBoleto = {
        barCode: convertCode.codigo,
        amount: convertCode.valor,
        expirationDate: convertCode.vencimento,
    };

    return infosBoleto;
}

export default boletoTitulo;