import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import { schedulesShow } from "../schedules/show.js"

//seleciona o input de data
const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //obtem a data do input
    const date = selectedDate.value

    //buscar na api as os agendamentos
    // O problema esta aqui { date }
    // Vc esta passando um object ao inves de uma string
    const dailySchedules = await scheduleFetchByDay(date);
    console.log(dailySchedules);


    //exibe os agendementos
    schedulesShow({ dailySchedules });

    //rendiriza horas dispoiniveis
    hoursLoad({ date });
}

