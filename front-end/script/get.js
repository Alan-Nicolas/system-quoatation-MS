fetch("http://localhost:8080/orcamento")
    .then(response => {
        if(!response.ok) throw new Error("erro ao buscar dados");
            return response.json();
        
    })
    .then(orcamentos => {
        const lista = document.getElementById("listaOrcamentos");
        orcamentos.forEach(orcamento => {
            const item = document.createElement("li");
                item.textContent = ` 
                ${orcamento.nameClient} - 
                ${orcamento.cpfClient} - 
                ${orcamento.typeService} -
                ${orcamento.valueService} -
                ${orcamento.description}`;
                lista.appendChild(item);
            
        });
    })
    .catch(error => {
        console.error("Erro: ", error)
    })