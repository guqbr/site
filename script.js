document.getElementById("btn").addEventListener("click", function(){
    let email = document.getElementById("idemail").value;
    let senha = document.getElementById("idsenha").value;

    if(email == "" || senha == ""){
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if(email == "admin@gmail.com" && senha == "1234"){
        window.location.href = "principal.html";
    }
    else{
        alert("Usuário ou senha incorretos!");
    }
});

let senha = document.getElementById("idsenha").value;
let confirmarsenha = document.getElementById("idconfirmarsenha").value;

if (senha != confirmarsenha) {
    alert("As senhas não estão iguais!");
}