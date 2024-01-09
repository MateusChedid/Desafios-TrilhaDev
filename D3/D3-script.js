const botaoMais = document.querySelector(".botao_mais");
const botaoMenos = document.querySelector(".botao_menos");
var quantidade = document.getElementsByClassName("quantidade");
var pluralSingularColher = document.getElementsByClassName("pluralSingularColher");
var pluralSingularEspiga = document.querySelector(".pluralSingularEspiga");

botaoMais.addEventListener('click',function(){
    var valorPorção = document.querySelector(".valor_porção");
    var valor = valorPorção.innerText 
    valor = parseInt(valor);

    if(valor > 0){
        for (var i = 0; i < pluralSingularColher.length; i++) {
            pluralSingularColher[i].textContent = "colheres";
        }
        pluralSingularEspiga.textContent = "espigas";
    } 
    
    valor += 1;
    if (valor < 10){
        valor = `0${valor}`
    }
    valorPorção.textContent = valor;
    for (var i = 0; i < quantidade.length; i++) {
        quantidade[i].textContent = valor;
    }

})
botaoMenos.addEventListener('click',function(){
    var valorPorção = document.querySelector(".valor_porção");
    var valor = valorPorção.innerText 
    valor = parseInt(valor);

    if(valor == 2){
        for (var i = 0; i < pluralSingularColher.length; i++) {
            pluralSingularColher[i].textContent = "colher";
        }
        pluralSingularEspiga.textContent = "espiga";

    } 
    
    if (valor > 1){
    valor -= 1;
    }
    if (valor < 10){
        valor = `0${valor}`
    }
    valorPorção.textContent = valor;
    for (var i = 0; i < quantidade.length; i++) {
        quantidade[i].textContent = valor;
    }
})

