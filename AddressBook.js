class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name");
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name");
    if (!/^[A-Za-z0-9 ]{4,}$/.test(address)) throw new Error("Invalid Address");
    if (!/^[A-Za-z- ]{4,}$/.test(city)) throw new Error("Invalid City");
    if (!/^[A-Za-z ]{4,}$/.test(state)) throw new Error("Invalid State");
    if (!/^\d{5}$/.test(zip)) throw new Error("Invalid Zip Code");
    if (!/^\d{10}$/.test(phone)) throw new Error("Invalid Phone Number");
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) throw new Error("Invalid Email");

    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }
}
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  addContact(contact) {
    const isDuplicate = this.contacts.some(c => c.firstName === contact.firstName && c.lastName === contact.lastName);
    if (isDuplicate) {
      throw new Error("Duplicate contact: Person with this name already exists.");
    }

    this.contacts.push(contact);
  }

  findByName(firstName, lastName){
  return this.contacts.find(c=>c.firstName===firstName && c.lastName===lastName);
  }

  findByCityOrState(query){
    return this.contacts.find(c=>c.city===query || c.state===query);
  }

  viewByCityOrState(query){
    let contact = this.contacts.find(c=>c.city===city || c.state===state);
    return (contact)?contact.firstName+" "+contact.lastName:"contact not found";
  }

  countByCityOrState(query) {
    return this.contacts.reduce((count, c) => (c.city === query || c.state === query) ? count + 1 : count, 0);
  }

  editContact(firstName, lastName, updatedContact){
  let contact=this.findByName(firstName, lastName);
  if(contact){
  Object.assign(contact, updatedContact);
  return "contact updated";
  }
  return "Contact Not Found";
  }

  deleteContact(firstName,lastName){
    let initialLength=this.contacts.length;
    this.contacts=this.contacts.filter(c=>c.firstName!==firstName && c.lastName!==lastName);
    return (initialLength>this.contacts.length)?"contact deleted":"contact Not Found";
  }

  totalContacts(){
    return this.contacts.reduce(count=>count+1,0);
  }

  sortByName() {
    return this.contacts.sort((a, b) => (a.firstName + a.lastName).localeCompare(b.firstName + b.lastName));
  }

  listContacts(){
  return this.contacts;
  }

}

let addressBook = new AddressBook();
try {
  addressBook.addContact(new Contact("Krishna", "Agarwal", "123 Main St", "New York", "New York", "10001", "1234567890", "krishna@gmail.com"));
  addressBook.addContact(new Contact("Juhi", "Agarwal", "456 Elm St", "Los Angeles", "California", "90001", "0987654321", "juhi@gmail.com"));
  addressBook.addContact(new Contact("Yashi", "Agarwal", "789 Main Street", "Dakota", "Dakotas", "90001", "0987654321", "yashi@gmail.com"));
} catch (error) {
  console.error(error.message);
}

console.log(addressBook.totalContacts());

console.log(addressBook.deleteContact("Juhi","Agarwal"));

console.log(addressBook.editContact("Krihs", "Doe",{phone:"2341854107", city:"Chicago"}));

console.log(addressBook.listContacts());

console.log(addressBook.viewByCityOrState("New York"));

console.log("Sorted Contacts:", addressBook.sortByName());
