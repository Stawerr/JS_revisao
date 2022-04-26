function createContactListItem(contact){
    const liElement=document.createElement('li')
    liElement.textContent=contact.fullname

    return liElement
}

export {createContactListItem}