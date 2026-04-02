import Person from "./Person";

const Persons = ({ persons, handleDelete }) =>
  persons.map((person) => (
    <Person
      key={person.id}
      person={person}
      onClick={() => handleDelete(person.name, person.id)}
    />
  ));

export default Persons;
