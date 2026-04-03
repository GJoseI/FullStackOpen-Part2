import { useReducer, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((intialPersons) => {
      setPersons(intialPersons);
    });
  }, []);

  const addPerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    };
    personsService.create(personObject).then((returnedPerson) => {
      console.log(returnedPerson);
      setPersons(persons.concat(returnedPerson));
    });
    setNewName("");
    setNewNumber("");
  };

  const handleDelete = (name, id) => {
    if (confirm(`Delete ${name} ?`)) {
      personsService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const p = persons.find((p) => p.name === newName);
        const changedPerson = { ...p, number: newNumber };

        personsService.update(p.id, changedPerson).then((returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id === p.id ? returnedPerson : person)
          );
        });
        
        setNewName("");
        setNewNumber("");
      }
    }else {
      addPerson()
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const filterPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filterPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
