const Person = require("./person.model");

class PersonService {
  async createPerson(person) {
    console.log("create service");
    try {
      const createdPerson = await Person.create({
        last: person.last,
        first: person.first,
      });
      return createdPerson;
    } catch (erorr) {
      console.log("person service error", erorr);
    }
  }
  async getPersons() {
    console.log("create service");
    try {
      const createdPerson = await Person.findAll();
      return createdPerson;
    } catch (erorr) {
      console.log("person service error", erorr);
    }
  }
}

module.exports = new PersonService();
