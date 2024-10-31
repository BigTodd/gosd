const jas = document.querySelector('input[name="suw"]')
const dwa = document.querySelector('input[name="kol"]')
const dra = document.querySelector('button')
const bl1 = document.querySelector("#bl11")
const bl2 = document.querySelector("#bl12")

function god(){
    const jus = jas.value
    const dwu = dwa.value
    bl1.style.borderRadius = jus+"%"
    bl2.style.borderRadius = jus+"%"
    bl1.style.backgroundColor = dwu
    bl2.style.backgroundColor = dwu
}
dra.addEventListener('click', god)