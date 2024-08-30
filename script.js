document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const agradecer = document.getElementById("agradecer");
  const inputs = document.querySelectorAll("input");
  const textarea = document.getElementById("mensagem");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const assunto = document.getElementById("assunto").value;
    agradecer.style.display = "block";
    agradecer.textContent = `Obrigado, ${nome}! Seu e-mail com o assunto: ${assunto}, foi enviado com sucesso.`;

    textarea.value = "";
    inputs.forEach((input) => {
      input.value = "";
    });
  });
});
