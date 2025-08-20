import { schedulesDay } from "../schedules/load.js"

//selecion o input de data
const selectedDate = document.getElementById("date");

//recarregar a lista de horario quando mudar a data
selectedDate.onchange = () => schedulesDay()

