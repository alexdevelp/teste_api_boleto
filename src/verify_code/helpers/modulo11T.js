export function modulo11Titulo(bloco) {

    const codigo = bloco.split('').reverse();

    let multiplicador = 2;

    const somatorio = codigo.reduce((acc, current) => {
      const soma = Number(current) * multiplicador;
      multiplicador = multiplicador === 9 ? 2 : multiplicador + 1;
      return acc + soma;
    }, 0);

    const restoDivisao = somatorio % 11;
    
    const DV = 11 - restoDivisao;

    if (DV === 0 || DV === 10 || DV === 11) return 1;

    return DV;
}
