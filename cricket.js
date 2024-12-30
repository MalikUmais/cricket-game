let strScore = localStorage.getItem('Score');
let score;
ResetScore(strScore);
function ResetScore(strScore) {
    score = strScore ? JSON.parse(strScore) : {
        win: 0,
        tie: 0,
        lost: 0,
    };

    //     //another methode to declare function inside object
    //     //displayScore:function(){}
    score.displayScore = function () {
        return `Won:${score.win},Lost:${score.lost},Tie:${score.tie}`;
    };
    showResult();
}

function generateCompChoice() {
    let randomNumber = Math.random() * 3;

    if (randomNumber > 0 && randomNumber <= 1) {
        return "bat";
    }
    else if (randomNumber > 1 && randomNumber <= 2) {
        return "ball";
    }
    else {
        return "stump";
    }

}
function getResult(userMove, compMove) {
    if (userMove === compMove) {
        score.tie++;
        return 'tie';
    } else if (userMove === 'bat' && compMove === 'ball') {
        score.win++;
        return 'user won';
    } else if (userMove === 'bat' && compMove === 'stump') {
        score.lost++;
        return 'computer won';
    } else if (userMove === 'ball' && compMove === 'stump') {
        score.win++;
        return 'user won';
    } else if (userMove === 'ball' && compMove === 'bat') {
        score.lost++;
        return 'computer won';
    } else if (userMove === 'stump' && compMove === 'ball') {
        score.lost++;
        return 'computer won';
    } else if (userMove === 'stump' && compMove === 'bat') {
        score.win++;
        return 'user won';
    }
}

function showResult(userMove, compMove, result) {
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#User-Move').innerText =
        userMove ? `Your Move ${userMove}` : '';
    document.querySelector('#Comp-Move').innerText =
        compMove ? `Computer Move ${compMove}` : '';
    document.querySelector('#res').innerText = result || '';
    document.querySelector('#Final-Score').innerText =
        score.displayScore();


}