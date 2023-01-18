const groceries = ['Milk', 'Cookies', 'Orange Juice']

const groceryList = document.getElementById('groceryList')
const newGroceryinput = document.getElementById('newGrocery')
const addBtn = document.getElementById('addBtn') 

const createGroceryElement = groceryName => {
  const groceryElement = document.createElement('li')
    groceryElement.innerText = groceryList
    groceryElement.classList.add('groceryItem')
    return groceryElement
} 

const addGrocery = newGrocery => {
    groceryList.appendChild(createGroceryElement(newGrocery))
}

addBtn.addEventListener('click', e => {
    e.preventDefault()
    const value  = newGroceryInput.value
    if (value) {
        addGrocery(value)
        newGroceryInput.value = null
    }
})

groceries.map(grocery => addGrocery(grocery))  

