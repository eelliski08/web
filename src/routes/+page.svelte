
<!--Delar upp sidan i två delar-->
<main>
  <div>
    
    <h1 class="name"> Elias Mesquine </h1>
    <h2 class="item" >Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
    <h3>Inspirerade citat för min webbutvecklingsresa:</h3>
    <!--Under denna kommer vi lägga till fler element-->
  
<p id="inspo">
    "The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
</p>

<p style="background-color:pink">
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." - <span>Patrick McKenzie, software engineer and entrepreneur</span>.
</p>

  </div>
    <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling-->  

</main>

<style>
    .name{
        font-family:'Elias Mesquine';
        font-size: 75px;
    }


  main{
    /*Styling för att dela upp sidan i två delar. */
    /*Vi kommer gå igenom detta i detalj senare*/
    margin: auto;
    width: 80vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
  }
  div{
    /*Styling för att centrera texten i behållaren*/
    margin: auto;
  }

  
h1{
    color:rgb(61, 57, 57);
}
h2{
    color: rgb(255, 213, 0);
}
h3{
    color: #D4AF37;
    font-family: sans-serif;
    font-weight: bold;
}


h1{
    background-color: rgb(255, 255, 255);
}


#inspo{
    font-family: courier;
    font-size: 100%;
}

span{
    color: green;
}


  /* Vi skiljer elementen med ett kommatecken(,) för att ge möjligheten till att ge flera element samma styling*/
h1, h2, h3, p {
  display: block;
  /*Ger utrymme mellan element*/
  margin: 10px;
}

  


                

  </style>

  
<svg viewBox="-150 0 -300 300" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
</svg>





