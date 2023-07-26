//Temporisador
var timer

//Selectores
const selectors = document.getElementsByClassName('selector')

//Constante de colores
const selectedColor = '#a1a1a1'
const deselectedColor = '#d1d1d1'

//Ciclo para agregar el evento a los dos selectores
for(const selector of selectors){
  selector.addEventListener('click', () => {
    //Obtengo el otro seleccionador
    const otherSelector = selectors.item(parseInt(selector.getAttribute('id')) === 0 ? 1 : 0)

    //Obtengo el item
    const actuallyItem = document.getElementById(selector.getAttribute('actuallyItem'))//Item en el que se encuentra
    const itemSelector = document.getElementById(selector.getAttribute('itemSelector'))//Item al que va a girar

    //Remueve sus animaciones anteriores
    actuallyItem.classList.remove('spinLeft')
    itemSelector.classList.remove('spinRight')

    //Le añade su nueva animacion
    actuallyItem.classList.add('spinRight')
    itemSelector.classList.add('spinLeft')
    
    //Cambia los colores de los selectores
    selector.style.backgroundColor = selectedColor
    otherSelector.style.backgroundColor = deselectedColor

    //Agrega un tiempo de esperar para cambiar
    clearTimeout(timer)
    timer = setTimeout(() => {
      //console.log('hola')
      otherSelector.click()
    }, 10000)
  })
}

selectors.item(0).click()