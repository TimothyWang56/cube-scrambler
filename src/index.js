const Cube = require('cubejs');
let storedCube;

let scramble = document.getElementById('scramble');
let scrambleButton = document.getElementById("scramble-button");

const setScrambleText = (text) => {
    scramble.innerHTML = text;
}

const fetchScramble = () => {
    if (!storedCube) {
        Cube.initSolver();
        storedCube = Cube;
    }
 
    const cube = storedCube.random();
    const scramble = cube.solve();
    setScrambleText(scramble);
}

fetchScramble();

scrambleButton.onclick = function() {
    fetchScramble();
}