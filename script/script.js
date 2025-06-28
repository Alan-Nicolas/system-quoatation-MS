document.getElementById("quoatation-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const dados = {
        nameClient: document.getElementById('name-client').value,
        cpfClient: document.getElementById('cpf-client').value,
        typeService: document.getElementById('type-service').value,
        valueService: parseFloat(document.getElementById('value-service').value),
        description: document.getElementById('description-service').value
    };

    fetch('http://localhost:8080/orcamento', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (response.ok) {
                alert("cadastro feito");
                
                document.getElementById("name-client").value = "";
                document.getElementById("cpf-client").value = "";
                document.getElementById("type-service").value = "";
                document.getElementById("value-service").value = "";
                document.getElementById("description-service").value = "";
            } else {
                alert("erro no cadastro")
            }
        })



})