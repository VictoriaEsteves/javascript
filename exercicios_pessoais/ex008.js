function quantidadeDiasNoMes(nomeMes) {
    const mesLowerCase = nomeMes.toLowerCase();
  
    if (mesLowerCase === "janeiro" || mesLowerCase === "março" || mesLowerCase === "maio" || mesLowerCase === "julho" || mesLowerCase === "agosto" || mesLowerCase === "outubro" || mesLowerCase === "dezembro") {
      return 31;
    } else if (mesLowerCase === "abril" || mesLowerCase === "junho" || mesLowerCase === "setembro" || mesLowerCase === "novembro") {
      return 30;
    } else if (mesLowerCase === "fevereiro") {
      return 28;
    } else {
      return -1; // Mês inválido, pode ser tratado de acordo com sua necessidade
    }
}
  
  // Exemplo de uso:
  const mes = "novembro";
  const diasNoMes = quantidadeDiasNoMes(mes);
  
  if (diasNoMes !== -1) {
    console.log(`O mês de ${mes} tem ${diasNoMes} dias.`);
  } else {
    console.log(`"${mes}" não é um nome de mês válido.`);
}
  