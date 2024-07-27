function classificarGamer(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";
  
  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20 && saldoVitorias >= 11) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50 && saldoVitorias >= 21) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80 && saldoVitorias >= 51) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 90 && saldoVitorias >= 81) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 100 && saldoVitorias >= 91) {
    nivel = "Lendário";
  } else if (saldoVitorias <= 120 && saldoVitorias >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Antisocial";
  }
  
  return `O Antiherói tem um saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`;
}
  
const vitorias = 50;
const derrotas = 30;
let resultado = classificarGamer(vitorias, derrotas)
console.log(resultado);