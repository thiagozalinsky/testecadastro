document.addEventListener("DOMContentLoaded", function() {
    const nacionalidade = document.getElementById("nacionalidade");
    const passaporteSection = document.getElementById("passaporte-section");
    const fotoPassaporteSection = document.getElementById("foto-passaporte-section");

    nacionalidade.addEventListener("change", function() {
        if (nacionalidade.value === "estrangeiro") {
            passaporteSection.style.display = "block";
            fotoPassaporteSection.style.display = "block";
        } else {
            passaporteSection.style.display = "none";
            fotoPassaporteSection.style.display = "none";
        }
    });

    document.getElementById("cadastro-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch("https://sheetdb.io/api/v1/hpd9uqxdnxjc9", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert("Cadastro realizado com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar os dados:", error);
            alert("Ocorreu um erro ao realizar o cadastro.");
        });
    });
});
