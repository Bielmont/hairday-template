export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available');

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            hours.forEach((hours) => {
                //removendo class hour selected das li não slecionada
                hours.classList.remove("hour-selected");
            })
            //adiciona a classe na li selecionada
            selected.target.classList.add("hour-selected");
        })
    })

}
