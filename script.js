import { LocalDB } from 'https://cdn.skypack.dev/peadb'
const db = new LocalDB('grocery-list-db') 
const groceries = db.getAll ||  []

const groceryList = document.getElementById('groceryList')
const newGroceryinput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn') 

const createGroceryElement = grocery => {
  const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery
    groceryElement.classList.add('groceryItem')
    return groceryElement
} 

const addGrocery = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value  = newGroceryinput.value
    if (value) {
        addGrocery(value)
        newGroceryinput.value = null
    }
})

groceries.map(grocery => addGrocery(grocery))  

