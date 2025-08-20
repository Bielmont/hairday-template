import dayjs from "dayjs"

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

//definir data minina
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = (event) => {
    event.preventDefault();

    try {
        //recuperando nome do cliente
        const name = clientName.value.trim();

        if (!name) {
            return alert("Por favor, insira o nome do cliente");
        }

        //recuperando horario
        const hourSelected = document.querySelector(".hour-selected");

        if (!hourSelected) {
            return alert("Por favor, selecione um horário");
        }

        //recupera somente a hora
        const [hour] = hourSelected.innerText.split(":");

        //inseri a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour");

        //gera um id
        const id = new Date().getTime();

        console.log({
            id, name, when,
        });


    } catch (error) {
        alert("Ocorreu um erro ao enviar o formulário");
        console.log(error);

    }
};
