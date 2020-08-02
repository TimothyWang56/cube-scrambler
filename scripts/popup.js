let scramble = document.getElementById('scramble');

const setScrambleText = (text) => {
    scramble.innerHTML = text;
}

const fetchScramble = async () => {
    chrome.storage.sync.get('scrambleType', function(data) {
        const scrambleType = data.scrambleType ? data.scrambleType : '3x3x3';
        fetch('https://scrambler-api.herokuapp.com/' + scrambleType)
            .then(res => res.text())
            .then(result => {
                const scramblesArray = JSON.parse(result);
                scramble.innerHTML = scramblesArray[0];

            }
        );
    })
}

fetchScramble();