var nome = "Lucas Vargas da Silva"
var cargo = "DEVELOPER"
var nomehtml = document.getElementById("nome-no-html");
var cargohtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");

function colocarnomenohtml(nome){
    nomehtml.innerHTML = nome;
}
function colocarcargonohtml(cargo){
    cargohtml.innerHTML = cargo;}

function logarnome(nome){
    console.log(nome);}

function Clicknoprojetos();{
    console.log("Clicou no botão Projetos");
    texto2.style.display = "block";
    texto1.style.display = "none";    
}
function ClicknoSobre(){
    console.log("Clicou no botão Sobre")
    texto2.style.display = "block";
}
colocarnomenohtml(nome);
colocarcargonohtml(cargo)