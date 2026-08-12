const numeroSenha = document.querySelector('parametro-senha__texto');
let tamanhoSenha=12;

numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelector('parametro-senha__botao');
botoes[0].onclick=dinuiTamanho;
function dinuiTamanho()  {
    tamanhoSenha=tamanhoSenha-1;
}