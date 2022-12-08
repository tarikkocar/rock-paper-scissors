function getComputerChoice() {
    let elements = ['Rock', 'Paper', 'Scissors']
    return elements[Math.floor(Math.random() * elements.length)];
}