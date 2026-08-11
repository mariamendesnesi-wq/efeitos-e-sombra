```javascript
const botaoTema = document.getElementById("btnTema");

// Verifica se o usuário já escolheu um tema
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {
    document.body.classList.add("tema-escuro");
    botaoTema.textContent = "☀️ Tema claro";
}

// Alterna entre tema claro e escuro
botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("tema-escuro");

    const temaEscuroAtivo =
        document.body.classList.contains("tema-escuro");

    if (temaEscuroAtivo) {
        botaoTema.textContent = "☀️ Tema claro";
        localStorage.setItem("tema", "escuro");
    } else {
        botaoTema.textContent = "🌙 Tema escuro";
        localStorage.setItem("tema", "claro");
    }
});
```
