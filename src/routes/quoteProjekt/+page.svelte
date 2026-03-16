<script>

let quote = ""

async  function load(){
let data = await fetch("https://dummyjson.com/quotes/random")
let events = await data.json()
console.log(events)

quote = events.quote + " - " + events.author
}

</script>


<main>
    <h1> QUOTE HERE</h1>
    <button on:click={load}>
        generate random quote   
    </button>
    <p>{quote}</p>
</main>

<style>
    h1 {
        justify-self: center;
        text-decoration:underline;
    }

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3px;
    }


    button {
        align-content: center;
    }
</style>
