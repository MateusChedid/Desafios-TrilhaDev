
const info = document.querySelector(".container");
const input_num = document.querySelector(".input_num");
const input_nome = document.querySelector(".input_nome");
const input_val = document.querySelector(".input_val")
const input_cvv = document.querySelector(".input_cvv")

const num_dinamicos = document.querySelector(".num_dinamicos")
const nome_dinamico = document.querySelector(".nome_dinamico")
const val_dinamica = document.querySelector(".val_dinamica")
const cvv_dinamico = document.createElement('h2');
const cvv_dinamico_input = document.createElement('h3');
const cvv_dinamico_barra= document.createElement('div');

const card_inside = document.querySelector(".card_inside")
const card_png = document.querySelector("#card_png") 
let verifica_card = 0;
let cvv_criado = 0

input_num.addEventListener('input', function(e){
    const input_num_Value = input_num.value;
    const input_only_num = input_num_Value.replace(/\D/g, ''); 
    const cardNumber = input_only_num.padEnd(16, '*');
    
    num_dinamicos.innerText = formatCardNumber(cardNumber);
    });

    function formatCardNumber(cardNumber) {
      return cardNumber.match(/.{1,4}/g).join(' ');
    }

input_nome.addEventListener('input',function(e){
  nome_dinamico.innerText = input_nome.value;
  if(input_nome.value == ''){
    nome_dinamico.innerText = "Seu nome aqui"
  }

})

input_val.addEventListener('input',function(e){
  const input_val_Value = input_val.value;
  const input_only_val = input_val_Value.replace(/\D/g, ''); 
  const cardVal = input_only_val.padEnd(4, '*');
 
  val_dinamica.innerText = formatCardVal(cardVal);
  });

function formatCardVal(cardVal) {
  return cardVal.match(/.{1,2}/g).join('/');
}


input_cvv.addEventListener('input',function(e){
  const input_cvv_Value = input_cvv.value;
  const input_only_cvv = input_cvv_Value.replace(/\D/g, ''); 
  const cardCvv = input_only_cvv.padEnd(3, '*'); 
 
  cvv_dinamico_input.innerText = cardCvv;
  });

document.addEventListener('click', function(e){
  if (e.target !== input_cvv) {
    if (verifica_card == 1){
      card_png.src = 'cartao_front.png';
      num_dinamicos.style.display = "block";
      nome_dinamico.style.display = "block";
      val_dinamica.style.display = "block";
      verifica_card = 0;
      if(cvv_criado==1){
        cvv_dinamico.style.display = "none"
        cvv_dinamico_input.style.display = "none"
        cvv_dinamico_barra.style.display = "none"
      }

    }

  } else{
    if(verifica_card == 0){
      card_png.src = 'cartao_back.png';
      num_dinamicos.style.display = "none";
      nome_dinamico.style.display = "none";
      val_dinamica.style.display = "none";
      if(cvv_criado==0){
      cvv_dinamico.className = "cvv_dinamico"
      cvv_dinamico.innerText = "CVV";

      cvv_dinamico_input.className = "cvv_dinamico_input"
      cvv_dinamico_input.innerText = "***";

      cvv_dinamico_barra.className = "cvv_dinamico_barra"

      card_inside.appendChild(cvv_dinamico_barra)
      card_inside.appendChild(cvv_dinamico)
      cvv_dinamico_barra.appendChild(cvv_dinamico_input)
      cvv_criado=1;
      } else{
        cvv_dinamico.style.display = "block"
        cvv_dinamico_input.style.display = "block"
        cvv_dinamico_barra.style.display = "block"
      }
      
      verifica_card = 1;
    }

  }
})


const cardNumber  = document.querySelector('.cardNumber')
const titularName  = document.querySelector('.titularName')
const expire  = document.querySelector('.expire')
const CVV  = document.querySelector('.CVV')



info.addEventListener("submit", function (e) { 

  let erro_nume = document.querySelector(".erro_nume");
  let erro_nome = document.querySelector(".erro_nome");
  let erro_data = document.querySelector(".erro_data");
  let erro_cvv = document.querySelector(".erro_cvv");
  
  function inputVazio(x){
    if (x==''){
      return true;
    }
  }
  
  function isNotANumber(x){
    var regex = /^[0-9]+$/;
  
    if (!(regex.test(x))) {
      return true
  }
  }
  
    function verificaNum(input){
    if (inputVazio(input)){
  
      console.error("Não é permitido numeros vazios");
  
      return false;
    } else if(isNotANumber(input)){
  
      console.error("São apenas permitidos numeros");
      return false;
    } else if(input.length < 16){
      console.error("Numero incompleto");
      return false;

    }else {
        if (erro_nume){
          input_num.style.borderColor = '#111827';

          erro_nume.remove();
        }
        return true;
    }
  }
  
  //Verificando o Nome do cartão
  function verificaNome(input){
    if (inputVazio(input)){
      console.error("Não é permitido nomes vazios");
      return false;
  } else {
      if (erro_nome){
        input_nome.style.borderColor = '#111827';

        erro_nome.remove();
      }
    return true
  }
  }
  
  //Verificando Data de validade
  function verificaData(input){
    if (inputVazio(input)){
      console.error("Não é permitido datas vazias");
      return false;
    } else if(isNotANumber(input)){
      console.error("São apenas permitidos numeros validade");
      return false;
  } else if(input.length < 4){
    console.error("Numero incompleto");
    return false;

  } else {
    if (erro_data){
      input_val.style.borderColor = '#111827';

      erro_data.remove();
    }
    return true
  }
  }

  //Verificando CVV
  function verificaCVV(input){
    if (inputVazio(input)){
      console.error("Não é permitido CVV vazio");
      return false;
    } else if(isNotANumber(input)){
      console.error("São apenas permitidos numeros em CVV");
      return false;
  }  else if(input.length < 3){
    console.error("CVV incompleto");
    return false;

  }else {
    if (erro_cvv){
      input_cvv.style.borderColor = '#111827';

      erro_cvv.remove();
    }
    return true
  }
  }
  


//----------------------------------------------------------------


  if(!(verificaNum(input_num.value))){
    e.preventDefault();

    if (!(erro_nume)){
      var erro = document.createElement("h4");
      erro.className = "erro_nume"; 
      erro.innerText = `Insira um número de cartão válido`;
      input_num.style.borderColor = '#FB7185';
      cardNumber.append(erro);
    } 
  }
  if(!(verificaNome(input_nome.value))){
    e.preventDefault();
  
    if (!(erro_nome)){
      var erro = document.createElement("h4");
      erro.className = "erro_nome"; 
      erro.innerText = `Insira um nome`;
      input_nome.style.borderColor = '#FB7185';
      titularName.append(erro);
    } 

  }
  if(!(verificaData(input_val.value))){
    e.preventDefault();

    if (!(erro_data)){
      var erro = document.createElement("h4");
      erro.className = "erro_data"; 
      erro.innerText = `Data inválida`;
      input_val.style.borderColor = '#FB7185';
      expire.append(erro);
    } 
  

  }
  if (!(verificaCVV(input_cvv.value))) {
    e.preventDefault();

    if (!(erro_cvv)){
      var erro = document.createElement("h4");
      erro.className = "erro_cvv"; 
      erro.innerText = `CVV inválido`;
      input_cvv.style.borderColor = '#FB7185';
      CVV.append(erro);
    } 
  
  }

})



