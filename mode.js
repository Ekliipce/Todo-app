const toggle_mode = document.getElementById('t-light-dark')
const html_var = document.querySelector('html')
const todo_list = document.getElementById('todo-list')
const input_var = document.getElementById('add-todo-item')
const attribution = document.querySelector('.attribution')

function ChangeMode(){
    if(toggle_mode.checked){
        html_var.classList.replace("bg-light", "bg-dark")
        todo_list.classList.replace("item-light", "item-dark")
        input_var.classList.replace("item-light", "item-dark")
        attribution.classList.replace("att-light", "att-dark")
    }else{
        html_var.classList.replace("bg-dark", "bg-light")
        todo_list.classList.replace("item-dark", "item-light")
        input_var.classList.replace("item-dark", "item-light")
        attribution.classList.replace("att-dark", "att-light")
    }
}

toggle_mode.addEventListener('change', ChangeMode)