const list_item = document.getElementById('container-of-todo-items')
const add_item = document.getElementById('add-todo-input')
const clear_button = document.getElementById('clear')
const list_all_button = document.getElementById('list-all')
const list_active_button = document.getElementById('list-active')
const list_completed_button = document.getElementById('list-completed')
const items_left = document.getElementById('number-of-item-left')

let cross = document.querySelectorAll('.cross')
let elements_by_radio = list_item.querySelectorAll('.radio')
let elements_checked = null
let elements_not_checked = null
let new_id = 4

function CreateNewTodo(todo_name, id){
    
    var newitem = document.createElement('div')
    var radio = document.createElement('input')
    var label = document.createElement('label')
    var name = document.createElement('p')
    var crosss = document.createElement('div')
    
    name.innerHTML = todo_name
    newitem.classList.add('item')
    radio.setAttribute('id', id)
    radio.setAttribute('hidden', '')
    radio.setAttribute('type', 'checkbox')
    radio.classList.add('radio')
    crosss.classList.add('cross')
    label.setAttribute('for', id)
    
    newitem.appendChild(radio)
    newitem.appendChild(label)
    newitem.appendChild(name)
    newitem.appendChild(crosss)
    list_item.appendChild(newitem)
}

function ClearCompleted(){
    for(var i = 0; i < elements_by_radio.length; i++){
        if(elements_by_radio[i].checked){
            elements_by_radio[i].parentElement.remove()
        }
    }
}

function AddFlexClass(element){
    if(element.parentElement.classList.contains('display-none')){
        element.parentElement.classList.replace('display-none', 'display-flex')
    }else{
        element.parentElement.classList.add('display-flex')
    }
}

function AddNoneClass(element){
    if(element.parentElement.classList.contains('display-flex')){
        element.parentElement.classList.replace('display-flex', 'display-none')
    }else{
        element.parentElement.classList.add('display-none')
    }
}

function DisplayAll(){
    for(var i = 0; i < elements_by_radio.length; i++){
        AddFlexClass(elements_by_radio[i])
    }
}

function DisplayActive(){
    elements_by_radio = list_item.querySelectorAll('.radio')
    for(var i = 0; i < elements_by_radio.length; i++){
        if(elements_by_radio[i].checked){
            AddNoneClass(elements_by_radio[i])
        }else{
            AddFlexClass(elements_by_radio[i])
        }
    }
}

function DisplayCompleted(){
    elements_by_radio = list_item.querySelectorAll('.radio')
    for(var i = 0; i < elements_by_radio.length; i++){
        if(!elements_by_radio[i].checked){
            AddNoneClass(elements_by_radio[i])
        }else{
            AddFlexClass(elements_by_radio[i])
        }
    }
}

function DisplayItemsLeft(){
    var number = 0
    for(var i = 0; i < elements_by_radio.length; i++){
        if(!elements_by_radio[i].checked){
            number += 1
        }
    }
    if(number == 1){
        items_left.innerText = number + " item left"
    }else{
        items_left.innerText = number + " items left"
    }
}

DisplayItemsLeft()

add_item.addEventListener("change", function(){
    console.log("create")
    CreateNewTodo(add_item.value, new_id)
    add_item.value = ""
    cross = document.querySelectorAll('.cross')
    new_id += 1
    DisplayItemsLeft()
})

clear_button.addEventListener('click', function(){
    elements_by_radio = list_item.querySelectorAll('.radio')
    ClearCompleted()
    DisplayItemsLeft()
})

list_all_button.addEventListener("click", DisplayAll)
list_active_button.addEventListener("click", DisplayActive)
list_completed_button.addEventListener("click", DisplayCompleted)

for(var j = 0; j < elements_by_radio.length; j++){
    elements_by_radio[j].addEventListener("change", DisplayItemsLeft)
}

window.setInterval(() => {
    cross = document.querySelectorAll('.cross')
    for(var k = 0; k < cross.length; k++){
    cross[k].addEventListener('click', function(){
        this.parentElement.remove()
    })
}
}, 1000);

