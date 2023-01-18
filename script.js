import { LocalDB } from 'https://cdn.skypack.dev/peadb'
import shortid from 'https://cdn.skypack.dev/shortid'

const db = new LocalDB('grocery-list-db') 
const groceries = db.getAll() || []

const groceryList = document.getElementById('groceryList')
const newGroceryinput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn') 

const createGroceryElement = grocery => {
  const groceryElement = document.createElement('li')
    groceryElement.innerText = grocery.value
    groceryElement.classList.add('groceryItem')
    return groceryElement
} 

const addGrocery = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value  = newGroceryinput.value
    const key = shortid.generate()
    if (value) {
        addGrocery({key, value})
        db.set ({key, value}) 
        newGroceryinput.value = null
    }
})

groceries.map(grocery => addGrocery(grocery))  

