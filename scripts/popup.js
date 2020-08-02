let scramble = document.getElementById('scramble');

const setScrambleText = (text) => {
    scramble.innerHTML = text;
}

const fetchScramble = async () => {
    fetch('https://scrambler-api.herokuapp.com/3x3x3')
        .then(res => res.text())
        .then(result => {
            const scramblesArray = JSON.parse(result);
            scramble.innerHTML = scramblesArray[0];

        }
    );
}

fetchScramble();