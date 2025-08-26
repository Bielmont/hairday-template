import dayjs from "dayjs"

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules, }) {
    try {
        periodMorning.innerHTML = "";
        periodAfternoon.innerHTML = "";
        periodNight.innerHTML = "";

        //renderiza os agendamentos por periodo
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

            //adiciona o id do agendamento
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

            //cria o icone de cancelar
            const cancelItem = document.createElement("img")
            cancelItem.classList.add("cancel-icon")
            cancelItem.setAttribute("src", "./src/assets/cancel.svg")
            cancelItem.setAttribute("alt", "Cancelar agendamento")

            //adicionar o tempo, nome e icone
            // ...existing code...
            item.appendChild(time)
            item.appendChild(name)
            item.appendChild(cancelItem)

            //obtem somente a hora
            const hour = dayjs(schedule.when).hour()

            //renderizar o agendamento na sessão
            if (hour <= 12) {
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }

        })

    } catch (error) {
        alert("Não foi possível exibir os agendamentos.")
        console.log(error);

    }
}

