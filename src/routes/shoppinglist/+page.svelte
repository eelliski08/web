<script>

    import { fade } from "svelte/transition";
    let varor = $state([]);
    let ny_vara = $state('')
    function add_item(event){
        event.preventDefault()
        if (ny_vara.trim() != '') {
            varor.push({name: ny_vara.trim()})
        }
        ny_vara = ''
        
    }
    function remove(index) {
        varor.splice(index, 1)
    }
    function movevara(index) {
        varor[index].köpt = !varor[index].köpt
    }
</script>

<main class="container">
    <h1>Shopping list</h1>

    <div class="categories_container">
        <section>
            <h2>
                Varor att köpa

            </h2>

            <ol>
                {#each varor as vara, index}
                {#if !vara.köpt}
                <li transition:fade>
                    {vara.name}
                    <button onclick={() => {remove(index)}}>X</button>
                    <button onclick={() => {movevara(index)}}>></button>
                    
                </li>
                {/if}
                {/each}
        
            </ol>
            <form onsubmit={add_item}>
                <button type="submit">Lägg till</button>
                <input type="text" id="vara" bind:value={ny_vara}>
            </form>
        </section>
        <section>
            <h2>
                Köpta varor
 
            </h2>
            <ul>
                {#each varor as vara, index}
                {#if vara.köpt}
                <li transition:fade>
                    {vara.name}
                    <button onclick={() => {remove(index)}}>X</button>
                    <button onclick={() => {movevara(index)}}>{'<'}</button>
                    
                </li>
                {/if}
                {/each}

            </ul>

        </section>
    </div>
</main>

<style>
    
.container{
    background-color: darkviolet;
    width: 60vw;
    height: 70vh;
    border-radius: 20px;
    display: grid;
    grid-template-rows: 1fr 9fr 1fr;
    margin: auto;

}

.container h1{
    justify-self: center;
    align-self: center;
}

.categories_container{
    height: 100%;
    background-color: rgb(177, 67, 224);
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    

}

section{
    height: 100%;
    width: 100%;
}
 .categories_container section:first-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.1) /* svart bakgrund med 10% opacitet */
  }
 
  .categories_container section:last-child{  /* vilket barn vill vi styla? */
    background-color: rgba(0, 0, 0, 0.3) /* svart bakgrund med 30% opacitet */
  }

  h2 {
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 24px;
  }

  li{
    padding: 5px 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  ol, ul{
    padding: 0px;
    list-style-position: inside;
  }




        
</style>