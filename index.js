const add = () => {
    const h1 = document.createElement('h1')
    h1.textContent = 'Работа с DOM'
    document.body.prepend(h1)
    }
    add() 
const newElement = () => { 
    const main = document.querySelector('#main') ; 
    const a = document.createElement('a')
    a.textContent=('dom')
    a.href = 'https://learn.javascript.ru/dom-nodes'
    main.append(a)
}
newElement()

const newColor = (color) => { 
    document.body.style.backgroundColor = color
}
newColor('green')

const newText = (text) => { 
    const li = document.createElement('li')
    li.textContent= text
    document.querySelector('#list').append(li)
}
newText('python')

const deleteCopy = () => {
    document.querySelector('#copyright').remove()
}
deleteCopy()