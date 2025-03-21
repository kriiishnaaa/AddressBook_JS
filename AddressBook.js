class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) throw new Error("Invalid First Name");
    if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) throw new Error("Invalid Last Name");
    if (!/^[A-Za-z0-9 ]{4,}$/.test(address)) throw new Error("Invalid Address");
    if (!/^[A-Za-z]{4,}$/.test(city)) throw new Error("Invalid City");
    if (!/^[A-Za-z]{4,}$/.test(state)) throw new Error("Invalid State");
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
    this.contacts.push(contact);
  }
  listContacts(){
  return this.contacts;
  }
}

const addressBook = new AddressBook();
try {
  addressBook.addContact(new Contact("John", "Doe", "123 Main St", "New York", "NY", "10001", "1234567890", "john@example.com"));
  addressBook.addContact(new Contact("Jane", "Doe", "456 Elm St", "Los Angeles", "CA", "90001", "0987654321", "jane@example.com"));
} catch (error) {
  console.error(error.message);
}

console.log(addressBook.listContacts());