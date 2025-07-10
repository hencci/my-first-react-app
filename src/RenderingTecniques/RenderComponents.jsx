// props are arguments that are passed into components. 
function ListItem(props) {
    return <li>{props.animal}</li>
}

function List(props) {
    return (
        <ul>
            {props.animals.map((animal) => {
                return <ListItem key={animal} animal={animal}/>;
            })}
        </ul>
    );
}

function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return (
        <div>
            <h1>Animals: </h1>
            <List animals={animals}/>
        </div>
    );
}
// We have moved our <ul> element to a different component called <List />. It still returns the <ul> element, but we can do a lot more with it as a component.