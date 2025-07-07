const modal = document.getElementById("modal-container")
document.getElementById("quoatation-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
        nameClient: document.getElementById('name-client').value,
        cpfClient: document.getElementById('cpf-client').value,
        typeService: document.getElementById('type-service').value,
        valueService: parseFloat(document.getElementById('value-service').value),
        description: document.getElementById('description-service').value
    };

    const resp = await fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(dados)
    })


    try {
        const data = await resp.json()
        localStorage.setItem("orcamentoId", data.id);

        if (resp.ok) {

            modal.showModal()

            setTimeout(() => {
                modal.close()
            }, 1000)

            //limpa o campo do formulario de cadastro
            document.getElementById("name-client").value = "";
            document.getElementById("cpf-client").value = "";
            document.getElementById("type-service").value = "";
            document.getElementById("value-service").value = "";
            document.getElementById("description-service").value = "";
        }


    }
    catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro inesperado. Verifique sua conexão ou tente novamente.");
    }



})