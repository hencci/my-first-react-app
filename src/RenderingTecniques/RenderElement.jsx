function App() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];

    return(
        <div>
            <h1>Animals:</h1>
            <ul>
                {/* we can embed expressions inside JSX with curly braces */}
                {animals.map((animal) => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        </div>
    );
    // We define an array called animals. Now inside our JSX, we use map to return a new array of li elements, adding animal as its text
}