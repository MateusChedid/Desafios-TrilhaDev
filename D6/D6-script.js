const enviar = document.querySelector('.botão-enviar');
enviar.addEventListener('click',function(){

    var input = document.querySelector('.input_text')
	var mensagem = input.value.trim();
  
	if (mensagem !== "") {

	  var chatContainer = document.querySelector(".chat-container");
	  var mensagemUsuario = document.createElement("div");
	  var containerConversaVocê = document.createElement("div");
      var textoUsuario = document.createElement("h4");
      textoUsuario.id = "conversa"

      containerConversaVocê.className = "container-conversa-você";
	  mensagemUsuario.className = "fala-você";
      textoUsuario.textContent = mensagem
      mensagemUsuario.appendChild(textoUsuario)
      containerConversaVocê.appendChild(mensagemUsuario)
	  chatContainer.appendChild(containerConversaVocê);
	  input.value = "";
      chatContainer.scrollTop = chatContainer.scrollHeight;
	}
    })
