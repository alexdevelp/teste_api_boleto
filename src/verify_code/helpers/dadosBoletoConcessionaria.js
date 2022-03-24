import formataMoeda from "./formataMoeda.js";

const dadosBoletoConcessionaria = (codigo)=> {
    let codigoBarras = '';

    for (let index = 0; index < 4; index++) {
        const start = (11 * (index)) + index;
        const end = (11 * (index + 1)) + index;
        codigoBarras += codigo.substring(start, end);
    }


    codigoBarras = codigoBarras.substring(0, 3) + codigoBarras.substring(4);
    let valor = formataMoeda(codigoBarras.substring(4,14));
    
    const data = {
        "barCode": codigoBarras,
        "amount": valor,
    }
   return data;
}

export default dadosBoletoConcessionaria;