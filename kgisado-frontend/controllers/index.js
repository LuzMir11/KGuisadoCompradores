const cards = document.getElementById('cards')
//content es para poder acceder a los elementos
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}
//cuando se tiene que recorrer elementos para pintarlos en nuestro sitio web es nesesario usar templates confragment
document.addEventListener('DOMContentLoaded', e =>{
    fetchData()
    if(localStorage.getItem('carritoi')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()
    }
})

cards.addEventListener('click', e =>{
    addCarrito(e)
})

items.addEventListener('click', e =>{
    btnAction(e)
})

const fetchData =  async () =>{
    try {
       const res = await  fetch ('http://localhost:3000/api/platillos')
       console.log(res)
       const data = await res.json()
       printCard(data)
       console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const printCard= data =>{
    data.forEach( producto =>{
        templateCard.querySelector('h5').textContent = producto.Platillo
        templateCard.querySelectorAll('p')[0].textContent = producto.Costos
        templateCard.querySelectorAll('p')[1].textContent = producto.Descripcion
        templateCard.querySelector('img').src = producto.Imagen
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    } )

    cards.appendChild(fragment)
}

const addCarrito = e =>{
    console.log(e.target.classList.contains('btn-dark'))
    if(e.target.classList.contains('btn-dark')){

        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()

}

const setCarrito = objeto =>{
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad : 1
    }

    if(carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad +1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()

}

const pintarCarrito = ()=>{
    console.log(carrito)
    items.innerHTML =  ''

    Object.values(carrito).forEach(producto =>{
        templateCarrito.querySelector('th').textContent = producto.title
        templateCarrito.querySelectorAll('td')[0].textContent = producto.title
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)

    pintarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const pintarFooter = ()=>{
    footer.innerHTML = ''
    if(Object.keys(carrito).length === 0){
        footer.innerHTML = '<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>'

        return
    }
    const nCant = Object.values(carrito).reduce((acc, {cantidad})=> acc + cantidad, 0)
    const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)

    templateFooter.querySelectorAll('td')[0].textContent = nCant
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')

    btnVaciar.addEventListener('click', ()=>{
        carrito = {}
        pintarCarrito()
    })
}

const btnAction = e =>{
    if(e.target.classList.contains('btn-info')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad ++
        carrito[e.target.dataset.id] = {...producto}
       pintarCarrito()
    }

    if(e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad --
        if(producto.cantidad === 0){
            delete carrito[e.target.dataset.id]
        }
        carrito[e.target.dataset.id] = {...producto}
        pintarCarrito()
    }

    e.stopPropagation()
}
