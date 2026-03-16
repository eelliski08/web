<script>
    import ElizaBot from "elizabot";
    import { enhance } from "$app/forms";
    import { nonpassive } from "svelte/legacy";
    const eliza = new ElizaBot();
    let chat = $state([{ user: 'Eliza', message: eliza.getInitial() }])
    let inputtext = ""

    
 async function write(message) {
    
  //Hämta HTML-elementet med id:et visible
  var element = document.getElementById("visible");
  //Ändrar elementets CSS-egenskap display till default
  element.style.display = "flex"; // Visa elementet
  
            

    chat = [...chat, { user: "You", message: message }];

    // random delay for Eliza's response time
    await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
    element.style.display = "none"

    //TODO: Add Eliza's response to the chat
      
  chat = [...chat, { user: "Eliza", message: eliza.transform(message) }];

  function write() {
    formData.get("text")
  }
    

  }


</script>


<main>
    <section>
        {#each chat as c}
          <article class:Eliza = {c.user == "Eliza"} data-time="12:34">
            <p>{c.user}: {c.message}</p>  
          </article>
        {/each}
        <article id="visible">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </article>
       
    </section>

    
    <form  method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
      cancel(); //don't post anything to server
      const text = formData.get("text"); // what does "text" refer to?
      write(text);

      formElement.reset();

      }}>
        <input name="text" type="text" placeholder= "write a message: ">
    </form>
  

</main>

<style>
  main {
    width: 60vw;
    height: 70vh;

    margin: 5vh;
    justify-self: center;
    
    display: grid;
    grid-template-rows: auto 10%;

    padding: 10px;
    background-color: lightblue;
    overflow-y:scroll
  }
  
section {
  display: flex;
  flex-direction: column;
}

#visible {
  width: 100px;
  height: 60px;
  background-color: rgb(135, 181, 198);
  display: none;
  justify-content: center; /* Centrera horisontellt */  
  align-items: center; /* Centrera vertikalt */

}

.circle {
width: 10px;
height: 10px;
border-radius: 50%;
background-color: rgb(22, 62, 77);
animation: typing 1000ms ease-in-out;
animation-iteration-count: infinite;
margin: 2px;

}


   
@keyframes typing {
    0% {transform: scale(1);}
    25% {transform: scale(1);}
    50% {transform: scale(1.4);}
    100% {transform: scale(1);}
}


/* CSS-stilar för .circle med index 1 (den första cirkeln) */
.circle:nth-child(1) {
animation-delay: 0ms; /* Ingen fördröjning */
}
/* CSS-stilar för .circle med index 2 (den andra cirkeln) */
.circle:nth-child(2) {
animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
}
/* CSS-stilar för .circle med index 3 (den tredje cirkeln) */
.circle:nth-child(3) {
animation-delay: 666ms; /* Starta animationen efter 666 ms */
}

article {
  justify-items: right;
  padding: 10px;
  border-radius: 10px;
}

.Eliza {
  background-color: rgb(119, 185, 209);
  justify-items: left;
}



article::before {
  content: "you " attr(data-time);
  font-size: 0.8em;
  color: gray;
  content-visibility: hidden;
}

.Eliza::before {
  content: "Eliza " attr(data-time);
}


article:hover {
  background-color: rgb(91, 140, 158);
  transform: scale(1);
  padding: 10px;
  border-radius: 10px;
}

input:focus {
  border-color: #3182ce;
  outline: none;
  box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.3);
}

article:first-child {
  background-color: rgb(95, 147, 166);
}
                  
       
</style>
