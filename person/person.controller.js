import PersonService from "./person.service.js";

const PersonController = {
  async createPerson(req, res) {
    const personData = req.body;
    try {
      const creatingPerson = await PersonService.createPerson(personData);
      console.log("person created final", creatingPerson);
      res.status(201).json({ message: "success", person: creatingPerson });
    } catch (error) {
      console.log("person created error", error);
      res.status(500).json({ error: "Failed to create person" }); // Added error response
    }
  },
  async getPersons(req, res) {
    try {
      const persons = await PersonService.getPersons();
      console.log("persons retrieved final", persons);
      return res.status(200).json({ message: "success", persons }); // Corrected status code and key name
    } catch (error) {
      console.log("error retrieving persons", error);
      return res.status(500).json({ error: "Failed to retrieve persons" }); // Added error response
    }
  },
};

export default PersonController;
