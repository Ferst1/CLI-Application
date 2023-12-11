const fs = require("fs/promises");
const path = require("path");

//* Раскомментируй и запиши значение
const contactsPath = path.join(__dirname, "contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error("Error reading contacts:", error.message);
    return [];
  }
}

// TODO: задокументировать каждую функцию
function listContacts() {
  // ...твой код. Возвращает массив контактов.
}

function getContactById(contactId) {
  // ...твой код. Возвращает объект контакта с таким id. Возвращает null, если объект с таким id не найден.
}

function removeContact(contactId) {
  // ...твой код. Возвращает объект удаленного контакта. Возвращает null, если объект с таким id не найден.
}

function addContact(name, email, phone) {
  // ...твой код. Возвращает объект добавленного контакта.
}
