import { Contact } from "./model/contact.js"

//UseCase - Gravar o contacto
function setupForm(selector, parent=document) {
    const formEl=parent.querySelector(selector)

    
    formEl.addEventListener('submit',(e)=>{
        e.preventDefault()
        //console.log(e.target.children[0].value) // vai buscar o que está na DOM
        
        //Obter valores do formulário
        const rawList=[...e.target.children] // [... ] para introduzir num array
        const inputsList=rawList.filter(input => {return input.name !== ''})
        
        let formObject = {}

        for (const input of inputsList) {
            formObject[input.name] = input.value
        }
        console.log(formObject)
        //Validação de dados

        //Guardar os dados

        const contact=new Contact(formObject)
        console.log(Contact)
        //Comunicar com API externa
    })
}

export {setupForm}

        