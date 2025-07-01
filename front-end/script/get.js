async function listarOrcamentos() {


    const resp = await fetch("http://localhost:8080/orcamento");
    if (!resp.ok) throw new Error("Falha ao buscar orcamentos");

    const orcamentos = await resp.json();

    const container = document.getElementById("container-orcamentos");

    if (orcamentos.length === 0) {
        const aviso = document.createElement("p");
        aviso.textContent = "Nenhum orçamento cadastrado até o momento.";
        aviso.style.color = "gray";
        aviso.style.fontStyle = "italic";
        aviso.style.textAlign = "center"
        container.appendChild(aviso);
        return;

    }

    orcamentos.forEach(orcamento => {
        const card = document.createElement("div");
        card.classList.add("orcamento-card");
        if (orcamentos != null) {

        }
        card.innerHTML = `
            <h3>${orcamento.nameClient}</h3>
            <p><strong>CPF:</strong> ${orcamento.cpfClient}</p>
            <p><strong>Serviço:</strong> ${orcamento.typeService}</p>
            <p><strong>Valor:</strong> R$ ${orcamento.valueService.toFixed(2)}</p>
            <p><strong>Descrição:</strong> ${orcamento.description}</p>

            `;
        container.appendChild(card)

    });







}

document.addEventListener("DOMContentLoaded", listarOrcamentos);