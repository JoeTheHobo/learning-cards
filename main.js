let hand = [];
let outHand = [];
let discard = [];

let makingCard;
function addNewCard() {
    makingCard = {
        checkmarks: 0,
        correct: 0,
        incorrect: 0,
        frontText: "",
        backText: "",
    }

    $('backgroundOverlay').style.display = 'block';
    $('inputFlashcard').style.display = 'block';
    $('inputFront').style.display = 'block';
    $('inputFront2').focus();
    $('inputFront2').value = '';
    $('inputBack2').value = '';
    $('inputBack').style.display = 'none';


}
$('inputFront2').addEventListener("keydown",function (e) {
    if (e.key === 'Enter') {
        makingCard.frontText = this.value;
        $('inputBack').style.display = 'block';
        $('inputBack2').focus();
        $('inputBack').value = '';
        $('inputFront').style.display = 'none';

    }
})
$('inputBack2').addEventListener("keydown",function (e) {
    if (e.key === 'Enter') {
        makingCard.backText = this.value;
        $('backgroundOverlay').style.display = 'none';
        $('inputFlashcard').style.display = 'none';
        $('inputFront').style.display = 'none';

        hand.push(makingCard)

        if (addingStartCards > -1) {
            addingStartCards--;
            if (addingStartCards > 0)
                addNewCard();
            if (addingStartCards == -1) {
                hand.shuffle();
                displayNewCard();
            }
        }
    }
})

let addingStartCards = 10;
function start() {
    //addNewCard();
}

start();

function displayNewCard() {
    $('front').innerHTML = hand[0].frontText;
}