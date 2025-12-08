<script>
let color = "black"
let colors = [{namn: "Blue", value: "Blue"}, 
{namn: "Red", value: "Red"}, 
{namn: "Green", value: "Green"}, 
{namn: "Pink", value: "Pink"}
]
function handleSubmit(){
alert("välkommen " + Username + " " + Email)
}

let Username = ""
let Email = ""


</script>


<main>
    <div class="container">

        <div style = "width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};"></div>
        <h1>Register</h1>
        <form  on:submit|preventDefault={handleSubmit}>
            <label for="name">Namn:</label>
                <input type="text" id="name" bind:value={Username}>
            <br>
            <label for="name">email:</label>
                <input type="mail" id="email" bind:value={Email} >
            <br>
            <label for="name">password:</label>
                <input type="password" id="password" >
            <br>
            <label for="favourite color">Favourite color: </label>
            <select bind:value={color}>
            {#each colors as c}
            <option value={c.value}>{c.namn}</option>
            {/each}
            </select>
            <br>
             <input type="submit" value="Registrera">
        </form>

        
    
        
        
    </div>

    

    

</main>



<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
    }
form{
    margin: 1
    300px 0;
   
}
    
  
    
.container{
        
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #3a2e3b;
        margin: auto;
        display: flex;
        flex-direction: column;

        }   

.container{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
        
            

</style>







