const input = document.querySelector('input');
const buttonInserir = document.querySelector('.button_inserir');
const buttonRemove = document.querySelector('.button_remove');
const buttonRemoveTodos = document.querySelector('.button_remove_todos');
const ol = document.querySelector('ol');
const button = document.querySelectorAll('.buttons');
const exibiriButtons = document.querySelectorAll('.buttons')
const buttonCriar = document.getElementById('exibir_buttons')
const ladoDireito = document.querySelector('.lado_direito')
const ContainerLista = document.querySelector('.container_lista')




//aplicando evento de trclado para inserir os dados que o usuario digitar


buttonCriar.addEventListener('click', ()=>{
    ContainerLista.style = `
    display: grid`
    buttonCriar.style = `
    display: none`
    exibiriButtons.forEach((itens)=>{
        itens.style = `
        display: inline-block;`
    })

    ladoDireito.style = `
        display: inline-block;`
})
    
input.addEventListener('keyup', teclado);

function teclado(event){
    if(event.key === "Enter"){
        const li = document.createElement('li');
        const buttonx = document.createElement('button');
        const buttonSalvar = document.createElement('button')
        const div = document.createElement('div');
        li.setAttribute('class', 'li1', 'li2');
        div.setAttribute('class', 'div_li', 'div_li2');
        buttonSalvar.setAttribute('class', 'buttons_li')
        buttonx.setAttribute('class', 'button_delete','buttons_li');
        buttonx.innerText = '❌'
        buttonSalvar.innerText = '✅'

        if(input.value === ""){
            alert('Error! Você precisa digitar algo')
        }else{
            let n = 1
            ol.appendChild(li)
            li.append(input.value, div)
            div.append(buttonx, buttonSalvar)
            input.value = ""
            
            buttonx.addEventListener('click', ()=>{
                li.remove() 
            })

            buttonSalvar.addEventListener('click', ()=>{
                li.classList.toggle('li1')
                li.classList.toggle('li2')
            })
        }
    }
}

//Aplicando evento de click no button_inserir
buttonInserir.addEventListener('click', inserir);

function inserir(){
    const li = document.createElement('li');
    const buttonx = document.createElement('button');
        const buttonSalvar = document.createElement('button')
        const div = document.createElement('div');
        li.setAttribute('class', 'li1', 'li2');
        div.setAttribute('class', 'div_li', 'div_li2');
        buttonSalvar.setAttribute('class', 'buttons_li')
        buttonx.setAttribute('class', 'button_delete','buttons_li');
        buttonx.innerText = '❌'
        buttonSalvar.innerText = '✅'
    if(input.value === ""){
        alert('Error! Você precisa digitar algo');
    }else{
            ol.appendChild(li)
            li.append(input.value, div)
            div.append(buttonx, buttonSalvar)
            input.value = ""
            
            buttonx.addEventListener('click', ()=>{
                li.remove() 
            })

            buttonSalvar.addEventListener('click', ()=>{
                li.classList.toggle('li1')
                li.classList.toggle('li2')
            })
        }
}


//Aplicando evendo de Click no botão remover
buttonRemove.addEventListener('click', remove);

function remove(){
    const removeLi = document.querySelectorAll('li');
    ol.removeChild(removeLi[removeLi.length - 1]);
}

//Aplicando evento de click no botão para remover todos
buttonRemoveTodos.addEventListener('click', removeTodos);

function removeTodos(){
    const removeTodosLi = document.querySelectorAll('li');
    removeTodosLi.forEach(item =>{
        item.remove(item);
    })
}