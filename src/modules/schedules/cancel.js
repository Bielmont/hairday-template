import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

//gerar evento de clique para cada lista
periods.forEach((period) => {

    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            //obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            //pega o id
            const { id } = item.dataset
            //confrima o id selecionado
            if (id) {
                //confirma se quer remover
                const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento?")
                if (isConfirm) {
                    //remove o agendamento com a requisação da api
                    await scheduleCancel({ id })
                    //reload na lista
                    schedulesDay()
                }
            }
        }
    })
})
