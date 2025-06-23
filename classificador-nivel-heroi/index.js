const nomeHeroi = "Kaiser";

const qtdXP = 10001;

if (qtdXP < 1000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Ferro`);
} else if (qtdXP >= 1001 && qtdXP < 2000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Bronze`);
} else if (qtdXP >= 2001 && qtdXP < 5000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Prata`);
} else if (qtdXP >= 5001 && qtdXP < 7000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Ouro`);
} else if (qtdXP >= 7001 && qtdXP < 8000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Platina`);
} else if (qtdXP >= 8001 && qtdXP < 9000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Ascendente`);
} else if (qtdXP >= 9001 && qtdXP < 10000) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Imortal`);
} else if (qtdXP >= 10001) {
  console.log(`O Herói de nome ${nomeHeroi} está no nível de Radiante`);
}
