const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({course}) => <h2>{course}</h2>;

const Content = ({parts}) => parts.map(part => <Part key={part.id} part={part}/>)

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
  const total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0,)
  return <p><b>total of {total} exercises</b></p>
}

export default Course