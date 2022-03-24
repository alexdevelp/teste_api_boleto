export function modulo10(bloco) {
    const codigo = bloco.split('').reverse();
    const somatorio = codigo.reduce((acc, current, index) => {
      let soma = Number(current) * (((index + 1) % 2) + 1);
      soma = (soma > 9 ? Math.trunc(soma / 10) + (soma % 10) : soma);
      return acc + soma;
    }, 0);
    return (Math.ceil(somatorio / 10) * 10) - somatorio;
  }