import formataMoeda from "./formataMoeda.js";
import { modulo11Titulo } from "./modulo11T.js";
const tituloBancario = (codigo)=> {

    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + Number(days));
        
        let ano = result.getFullYear();
        let mes = result.getMonth()+1;
        let dia = result.getDate()+1;
        
        if(mes < 10) mes ='0'+mes;
        if(dia < 10) dia = '0'+dia;
        const endData = ano+'-'+mes+'-'+dia;

        return endData;
    }

    const cod = Array.from(codigo.toString()).map(Number)

    const DV = cod[4];

    const bloco = codigo.substring(0, 4) + codigo.substring(5);
    const valor = formataMoeda(codigo.substring(9, 19));
    const fatorVencimento = codigo.substring(5, 9);

    const vencimento = addDays("1997-10-07", fatorVencimento);

    const data = {
        status: modulo11Titulo(bloco) === Number(DV),
        codigo: codigo,
        valor: valor,
        vencimento: vencimento,
    }

    return data ;
}

export default tituloBancario;
