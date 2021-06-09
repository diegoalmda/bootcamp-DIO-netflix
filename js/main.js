var logado = false;

if(localStorage.getItem("acesso") == "true") {
  logado = true;
  console.log("entrou");
} else {
  window.location="login.html";
}

function logout() {
  localStorage.clear();
  window.location="login.html";
}