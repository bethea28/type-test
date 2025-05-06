import Person from "./person.model.js";

class PersonService {
  async createPerson(person) {
    console.log("create service");
    try {
      const createdPerson = await Person.create({
        last: person.last,
        first: person.first,
      });
      return createdPerson;
    } catch (error) {
      console.error("person service error", error); // Corrected typo and used console.error
      throw error; // Re-throwing the error to be handled by the controller
    }
  }
  async getPersons() {
    console.log("get persons service");
    try {
      const persons = await Person.findAll(); // Changed variable name for clarity
      return persons;
    } catch (error) {
      console.error("person service error", error); // Corrected typo and used console.error
      throw error; // Re-throwing the error to be handled by the controller
    }
  }
}

export default new PersonService();
