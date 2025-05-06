const PersonService = require("./person.service");

const PersonController = {
  async createPerson(req, res) {
    const personData = req.body;
    try {
      const creatingPerson = await PersonService.createPerson(personData);
      console.log("person created final", creatingPerson);
      res.status(201).json({ message: "success", person: creatingPerson });
    } catch (error) {
      console.log("person created error", error);
    }
  },
  async getPersons(req, res) {
    const personData = req.body;
    try {
      const creatingPerson = await PersonService.getPersons();
      console.log("person created final", creatingPerson);
      return res
        .status(201)
        .json({ message: "success", person: creatingPerson });
    } catch (error) {
      console.log("person created error", error);
    }
  },
};

module.exports = PersonController;
