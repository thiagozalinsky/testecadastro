document.addEventListener("DOMContentLoaded", function() {
    const nacionalidade = document.getElementById("nacionalidade");
    const passaporteSection = document.getElementById("passaporte-section");
    const passaporteFamiliarSection = document.getElementById("passaporte-familiar-section");

    nacionalidade.addEventListener("change", function() {
        if (nacionalidade.value === "estrangeiro") {
            passaporteSection.style.display = "block";
        } else {
            passaporteSection.style.display = "none";
        }
    });

    document.getElementById("cadastro-form").addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch("https://example.com/submit-form", {
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
