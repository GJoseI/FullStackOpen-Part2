const Person = ({ person, onClick }) => 
    <div>
        {person.name} {person.number}
        <button type="submit" onClick={onClick}>delete</button>
    </div>


export default Person;