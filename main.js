var cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
  cards[i].setAttribute("onclick", "this.classList.toggle('flipped');");
  cards[i].addEventListener("keydown", function(event) {
    if (event.code === "Space") {
      this.classList.toggle('flipped');
    }
  })
  cards[i].setAttribute("tabindex", "1");
}

function toggleAllCards() {
  for (var i=0;i<cards.length;i++){
    cards[i].classList.toggle('flipped');
  }
}

function revealAllCards() {
  for (var i=0;i<cards.length;i++){
    cards[i].classList.add('flipped');
  }
}

function hideAllCards() {
  for (var i=0;i<cards.length;i++){
    cards[i].classList.remove('flipped');
  }
}


// the following is the HTML structure of a card, wrapped with <div class="cardCollectionWrapper"> and <h1 class="sectionHeading">
/*
<div class="card">

  <div class="cardFront">
    <h3 class="cardFrontTitle">What year did India's first Prime Minister (Jawaharlal Nehru) pass away?</h3>
  </div>

  <div class="cardBack">
    <h3 class="flashTitle">India's first serving prime minister passed away on</h3>
    <p class="mainFlashContent">27 May 1964</p>
  </div>

</div>
*/

class Card {
  constructor(colour, hiddenTitle, hiddenContent, cardTitleOrQuestion, cardCollection) {
    this.colour = colour;
    this.hiddenTitle = hiddenTitle;
    this.hiddenContent = hiddenContent;
    this.cardTitleOrQuestion = cardTitleOrQuestion;

    this.collectionBelongingTo = cardCollection;

    // create element structure
    this.cardWrapper = document.createElement('div');
    this.cardWrapper.setAttribute('class', 'card');

        this.cardFront = document.createElement('div');
        this.cardFront.setAttribute('class', 'cardFront')

            this.cardFrontTitle = document.createElement('h3');
            this.cardFrontTitle.setAttribute('class', 'cardFrontTitle')
            this.cardFrontTitle.innerHTML = this.cardTitleOrQuestion;
            this.cardFront.appendChild(this.cardFrontTitle);

        this.cardBack = document.createElement('div');
        this.cardBack.setAttribute('class', 'cardBack');

            this.flashTitle = document.createElement('h3');
            this.flashTitle.setAttribute('class', 'flashTitle');
            this.flashTitle.innerHTML = this.hiddenTitle;

            this.mainFlashContent = document.createElement('p');
            this.mainFlashContent.setAttribute('class', 'mainFlashContent');
            this.mainFlashContent.innerHTML = this.hiddenContent;

            this.cardBack.appendChild(this.flashTitle);
            this.cardBack.appendChild(this.mainFlashContent);

      this.cardWrapper.appendChild(this.cardFront);
      this.cardWrapper.appendChild(this.cardBack);

      this.cardWrapper.setAttribute("onclick", "this.classList.toggle('flipped');");
      this.cardWrapper.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
          this.classList.toggle('flipped');
        }
      })

      this.collectionBelongingTo.appendChild(this.cardWrapper);

  }


}
