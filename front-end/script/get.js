const modalConfirm = document.querySelector("#modal-container")

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
            <button id="buttonCard" class="open-modal">Deletar</button> 
            <dialog id="dialog-delete">
            <h1 class="dialog-title">Confirmar exclusão?</h1>
                <div class="botoes-modal">
                    <button class="confirmar">Sim</button>
                    <button class="cancelar">Cancelar</button>
                </div>
            </dialog>
            <button id="buttonCard"  class="open-modal-put">Atualizar</button>
            `;

        const botaoAbrir = card.querySelector(".open-modal")
        const modal = card.querySelector("dialog")
        const botaoConfirmar = card.querySelector(".confirmar")
        const botaoCancelar = card.querySelector(".cancelar")

        botaoAbrir.addEventListener("click", () => modal.showModal())
        botaoCancelar.addEventListener("click", () => modal.close())
        botaoConfirmar.addEventListener("click", () => {
            deletarCards(orcamento.id, card)
            modal.close()

        }
        )
        container.appendChild(card)

        const btnAbrirPut = document.querySelector(".open-modal-put")
        const modalPut = document.getElementById("modal-form-cadastrar")
        const btnClosePut = document.getElementById("button-close")

        btnAbrirPut.addEventListener("click", () => modalPut.showModal())
        btnClosePut.addEventListener("click", () => modalPut.close())


    });



    async function deletarCards(id, elementoCard) {

        try {
            const resp = await fetch(`http://localhost:8080/orcamento/${id}`, {
                method: "DELETE",
            });

            

            if (resp.ok) {
                elementoCard.remove();
                modalConfirm.showModal()

                setTimeout(() => {
                    modalConfirm.close()
                }, 2000)

                const aviso = document.createElement("p");
                aviso.textContent = "Nenhum orçamento cadastrado até o momento.";
                aviso.style.color = "gray";
                aviso.style.fontStyle = "italic";
                aviso.style.textAlign = "center"

                setTimeout(() => {
                    container.appendChild(aviso);
                }, 2000)

                return;
            } else {
                alert("erro ao excluir orçamento")
            }
        } catch (error) {
            console.error("erro");
        }
    }
}

document.addEventListener("DOMContentLoaded", listarOrcamentos);