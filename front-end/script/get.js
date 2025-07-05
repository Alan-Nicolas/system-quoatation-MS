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
            <button class="open-modal">Deletar</button> 
            <dialog>
            <h1>Confirmar exclusão?</h1>
                <div class="botoes-modal">
                    <button class="confirmar">Sim</button>
                    <button class="cancelar">Cancelar</button>
                </div>
            </dialog>
            `;

        const botaoAbrir = card.querySelector(".open-modal")
        const modal = card.querySelector("dialog")
        const botaoConfirmar = card.querySelector(".confirmar")
        const botaoCancelar = card.querySelector(".cancelar")

        botaoAbrir.addEventListener("click", () => modal.showModal())
        botaoCancelar.addEventListener("click", () => modal.close())
        botaoConfirmar.addEventListener("click", () =>
            deletarCards(orcamento.id, card)
        )
        container.appendChild(card)

    });

    async function deletarCards(id, elementoCard) {
        const confirmar = confirm("deseja deletar?")
        if (!confirmar) return
        try {
            const resp = await fetch(`http://localhost:8080/orcamento/${id}`, {
                method: "DELETE",
            });

            if (resp.ok) {
                alert("apagado com sucesso")
                elementoCard.remove();
            } else {
                alert("erro ao excluir orçamento")
            }
        } catch (error) {
            console.error("erro");
        }


    }










}

document.addEventListener("DOMContentLoaded", listarOrcamentos);