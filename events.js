import { Contact } from "./model/contact.js"
import ContactValidator from "./validators/contact/index.js"
import {addContact} from "./store/contactList.js"

//UseCase - Gravar o contacto
function setupForm(selector, parent=document) {
    const formEl=parent.querySelector(selector)

    
    formEl.addEventListener('submit',(e)=>{
        e.preventDefault()
        //console.log(e.target.children[0].value) // vai buscar o que está na DOM
        
try {
     
    //Obter valores do formulário
    const rawList=[...e.target.children] // [... ] para introduzir num array
    const inputsList=rawList.filter(input => {return input.name !== ''})
    
    let formObject = {}
    
    for (const input of inputsList) {
        formObject[input.name] = input.value
    }
    console.log(formObject)
    //Validação de dados
    ContactValidator.exec(formObject.fullname)
    
    //Guardar os dados
    
    const contact=new Contact(formObject)
    addContact(contact)
    console.log(Contact)
    //Comunicar com API externa
} 
    catch (error) {
        console.error(error)
    }
})
}

export {setupForm}

        
//Adicionar contacto à lista de dados
//Semrpre que modificarmos a lista de dados renderizamos novamente o componente