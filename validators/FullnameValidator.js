import { ContactFullNameEmptyErro } from "../infra/exceptions/contact/ContactFullNameEmptyError.js"

class ContactFullNameValidator{
    static exec(fullname){
        this.isEmpty(fullname)
    }

    isEmpty(fullname){
        if(!fullname) throw new ContactFullNameEmptyErro('Exemplo')
    }
}

export{ContactFullNameValidator}