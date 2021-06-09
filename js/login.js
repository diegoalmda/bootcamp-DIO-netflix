function logar () {
  var email = document.getElementById("email");
  var senha = document.getElementById("password");

  if(email.value == "email@netflix.com" && senha.value == "admin") {
    localStorage.setItem("acesso", true);

    window.location="index.html";
  } else {
    alert("Usuário ou senha inválidos!!");
  }
}