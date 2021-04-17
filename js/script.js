var botao = document.querySelector("button#botao");
botao.addEventListener("click", validaDados);


function validaDados(){

    var form = document.forms['formulario'];
    alert(form.elements['setor-da-empresa'].value);
    alert(form.elements['email'].value);
    alert(form.elements['mensagem'].value)


}