const formataMoeda = (number)=> {
    
    let valor = number;

    valor = parseFloat(valor.replace(/([0-9]{2})$/g, ".$1"));

    return valor;
}

export default formataMoeda;

