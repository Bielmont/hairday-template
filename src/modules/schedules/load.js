import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //obtem a data do input
    const date = selectedDate.value

    //buscar na api as os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date });
    console.log(dailySchedules);


    //rendiriza horas dispoiniveis
    hoursLoad({ date });
}

