import dayjs from "dayjs"

import { openingHours } from "../../utils/opining-hours.js"
import { hoursClick } from "./hour-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    //limpa a lista do dia 
    hours.innerHTML = "";

    //obtem a lista de horarios ocupados
    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format("HH:mm")
    )




    // Lógica para carregar as horas disponíveis
    const opening = openingHours.map((hour) => {
        //recupera a hora
        const [scheduleHour] = hour.split(":")

        //adiciona a hora no date e ve se não tem hora no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast

        //define se o horario está disponível
        return {
            hour,
            available
        }
    })

    //renderizando horarios
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hoursHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hoursHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hoursHeaderAdd("Noite")
        }
        hours.append(li)
    })
    //adiciona o evento do click nos horarios disponiveis
    hoursClick()
}

function hoursHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}