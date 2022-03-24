const conversorTitulo = (codigo)=> {

    let codigoBarras = '';
 
    codigoBarras += codigo.substring(0, 3);
    codigoBarras += codigo.substring(3, 4); 
    codigoBarras += codigo.substring(32, 33);
    codigoBarras += codigo.substring(33, 37);
    codigoBarras += codigo.substring(37, 47);
    codigoBarras += codigo.substring(4, 9);
    codigoBarras += codigo.substring(10, 20);
    codigoBarras += codigo.substring(21, 31);

    return codigoBarras;

}

export default conversorTitulo;