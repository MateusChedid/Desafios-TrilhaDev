const info = document.querySelector(".info");
const emailnputs = document.querySelector(".emailnputs")
const senhaInputs = document.querySelector(".senhaInputs")
const verSenha = document.querySelector(".verSenha")
const senha = document.querySelector(".password")


info.addEventListener("submit", function (e) {
  let email = document.querySelector(".username").value;
  let password = document.querySelector(".password").value;
  let domain = email.substring(email.lastIndexOf("@"));
  let emailError = document.querySelector(".error-email");
  let passwordError = document.querySelector(".error-password");

  if (
    domain == "@gmail.com" ||
    domain == "@yahoo.com" ||
    domain == "@hotmail.com" ||
    domain == "@outlook.com"
  ) {
    if (emailError) {
      emailError.remove();
    }
  } else {
    e.preventDefault();
    if (!emailError) {
      let erro = document.createElement("h3");
      erro.className = "error-email"; 
      erro.innerText = `Formato de email incorreto`;
      emailnputs.append(erro);
    }
  }

  if (password == "") {
    e.preventDefault();
    if (!passwordError) {
      let erro = document.createElement("h3");
      erro.className = "error-password";
      erro.innerText = `Senha vazia`;
      senhaInputs.append(erro);
    }
  } else {
    if (passwordError) {
      passwordError.remove();
    }
  }
});

verSenha.addEventListener('click',function(){

  if (senha.type === "password") {
    senha.type = "text";
    verSenha.src = 'eye.png'
} else {
    senha.type = "password";
    verSenha.src = 'eye-off.png'

}
}
)
