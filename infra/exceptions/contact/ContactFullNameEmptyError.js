class ContactFullNameEmptyErro extends Error{
    constructor(name){
        super('Fullname field is required')
        this.name=name
    }
}

export {ContactFullNameEmptyErro}