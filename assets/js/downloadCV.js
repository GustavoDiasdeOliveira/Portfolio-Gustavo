document.getElementById("download-btn").addEventListener("click", function(event) {
    event.preventDefault(); // Impede o comportamento padrão

    const btn = event.target;
    btn.innerHTML = "Baixando...";

    setTimeout(() => {
        const a = document.createElement("a");
        a.href = "download/Curriculo_Gustavo_Dias_de_Oliveira.docx";
        a.download = "Curriculo_Gustavo_Dias_de_Oliveira.docx";
        a.click(); // Inicia o download

        btn.innerHTML = "<b>Download CV</b>";
    }, 2000);
}); 