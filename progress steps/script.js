const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circ') /*DOM*/

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++     /* cream o functie care la click va incrementa +1 de la butonul activ*/

    if(currentActive > circles.length){
        currentActive = circles.length      /*folosim lenght deoarece 'circles' este considerat o lista */
    }

    update()
    console.log(currentActive)
})

prev.addEventListener('click', () => {
    currentActive--     /* cream o functie care la click va incrementa +1 de la butonul activ*/

    if(currentActive < 1){
        currentActive = 1      /*folosim lenght deoarece 'circles' este considerat o lista */
    }

    update()
})

function update(){
    circles.forEach((circle, idx) =>{
        if(idx < currentActive){
            circle.classList.add('active')
        } else{
            circle.classList.remove('acitve')
        }
    })
}