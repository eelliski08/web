<script>

    let cards = $state([])
    let BluePoints = $state(0)
    let RedPoints = $state(0)
    let blueturn = $state(true)
    let flipcount = 0
    let firstcard = null
   

    const backImage = 'https://opengameart.org/sites/default/files/styles/medium/public/card%20back%20orange.png'

    function CreateCards() {
    
        let NewCards = []

    for (let i = 0; i < 12; i++) {
        NewCards.push({
            image: 'https://picsum.photos/200?random=' + Math.floor(i / 2),
            flipped: false,
            matched: false
        })
    }
     
    NewCards.sort(() => Math.random() - .5)
    return NewCards;

    }

    cards = CreateCards();


    function restartGame() {
    cards = CreateCards();
    BluePoints = 0;
    RedPoints = 0;
    blueturn = true;
    flipcount = 0;
    firstcard = null;
}



    function flip(card){
        if (flipcount<2 && !card.flipped){
        card.flipped =! card.flipped
        flipcount += 1
        

        
    } 

        if (flipcount === 2){

            setTimeout(() => {
            cards.forEach((card) => {
                card.flipped = card.matched;
            });
            flipcount = 0;
            cards = cards;
            }, 1000);
        }   


        if (flipcount === 1) {
        firstcard = card;
        }

        if (firstcard && firstcard !== card && firstcard.image === card.image) {
            firstcard.matched = true
            card.matched = true
            cards = cards;

            if (blueturn) {
                BluePoints += 1
            }
            else {
                RedPoints += 1
            }
            } else if (flipcount === 2) {
                blueturn = !blueturn        
        }

    }

        
      



</script>


<h1>Memory</h1>
<div class="NewGame">
    <button onclick={restartGame}>New game</button>
</div>

<main>
  <div class="grid-container">
    {#each cards as card }
        <div class="card" class:flipped= { card.flipped} onclick={()=>flip(card)}>
            <img src={card.image} alt="front" class="front">    
            <img src={backImage} alt="back" class="back">
        </div>
    {/each}
</div>

</main>

<aside class="blue"> 
    <p>{BluePoints}</p>
</aside>
<aside>
    <p>{RedPoints}</p>
</aside>
<aside class="turn"  class:blue={blueturn}> </aside>


<style>

.flipped{
    transform: rotateY(180deg);
    transform-style: preserve-3d;
}
main {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 0;
    
    justify-content: center;
}

.card img {
    position: absolute;
    width: 100%;
    height: 100%;
}

h1 {
    text-align: center;
    margin-bottom: 10px;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
}

.card {
    width: 100%;
    height: 100%;
    border: 1px solid black;
    position: relative;
    transition: transform 0.75s;
    
}

.back {
    backface-visibility: hidden;
}

.front {
    transform: rotateY(180deg);
}



aside{
    width: 100px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p{
    font-size: 30px;
  }

  .blue {
    background-color: blue;
    left:10px;

  }

  .turn {
    box-shadow: 0 0 10px 10px yellowgreen;
    z-index: -1;
  }

  .NewGame {
    display: flex;
    justify-content: center;
    margin: 15px;
  }

</style>