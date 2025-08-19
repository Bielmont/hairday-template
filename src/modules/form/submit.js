import dayjs from "dayjs"

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//carrega a data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD");

//definir data minina
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD");

form.onsubmit = (event) => {
    event.preventDefault();

    console.log("enviado");
};
