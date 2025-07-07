
document.getElementById("formUpdate").addEventListener("submit", async function (e) {
    e.preventDefault();

    const dados = {
        nameClient: document.getElementById('name-client').value,
        cpfClient: document.getElementById('cpf-client').value,
        typeService: document.getElementById('type-service').value,
        valueService: parseFloat(document.getElementById('value-service').value),
        description: document.getElementById('description-service').value
    }


    const id = localStorage.getItem("orcamentoId")

    if(!id) {
        alert("orçamento nao encontrado")
        return
    }

    try {
        
        const resp = await fetch(`http://localhost:8080/orcamento/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dados)
        })



        if (resp.ok) {
            alert("dados atualizados")
            console.log(dados)
        } else {
            alert("erro ao atualizar dados")
        }
    } catch (error) {
        alert("erro no servidor")
    }
})