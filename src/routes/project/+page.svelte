<script>
    let x = 700;
    let y = 470;
    let showPopup = false
    let RandomLetter = ""

    function ButtonMove() {

    if (Math.random() < 0.85) {
    x = Math.random() * (window.innerWidth - 120);
    y = Math.random() * (window.innerHeight - 50);
    }};

    function loggedIn() {
    alert("Logged in successfully")
    }

    function generateRandomNumber() {
        const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyåäö "
        RandomLetter = Letters[Math.floor(Math.random() * Letters.length)]
    }


</script>

<main>
    <h1> LOG IN</h1>

     <button
        class="RandomLetter"
        style="
            position: absolute;
            left: 730px;
            top: 410px;
            transform: translateX(-50%);
            generate letter"
            on:click={generateRandomNumber}>
            Genrate Letter
        </button>
        <p  style="
        position: absolute;
        left: 730px;
        top: 270px;
        transform: translateX(-50%);
        user-select: text;
        font-weight: bold;
        font-size: 48px;
        white-space: pre; 
        z-index: 4;"
    >
    {RandomLetter}
    </p>

      <div
        type="button"
        on:mouseenter={ButtonMove}
        on:click={loggedIn}
        class="hitbox"
        style="position: absolute; left: {x - 20}px; top: {y - 20}px;"
        ></div>
    <button class="MovingButton"
     style="position: absolute; left: {x}px; top: {y}px;"
     on:click={loggedIn}
     >Log in</button>
     
    {#if showPopup}
        <div class="overlay">
            <div class="modal">
                <p>Successfully logged in</p>
                <button on:click={() => showPopup = false}>OK</button>
            </div>
        </div>
    {/if}


    <div 
        class="login-outline"
        style="position: absolute; left: 600px; top: 190px;"
    >
    <input
    type="text"
    placeholder="Name:"
    on:keydown={(e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v') {
            return;
        }
        e.preventDefault();
    }}
    on:paste={(e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text');
        const lettersOnly = paste.replace(/[^a-zA-Z]/g, '');
         e.target.value += lettersOnly;
    }}>

        <input
    type="password"
    placeholder="password:"
    on:keydown={(e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'v') {
            return;
        }
        e.preventDefault();
    }}
    on:paste={(e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text');
        const lettersOnly = paste.replace(/[^a-zA-Z]/g, '');
        e.target.value = lettersOnly;
    }}>


    </div>

</main>

<style>
        main {

        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;
        }
        div {
            
        }

    .MovingButton {
        transition: left 0.5s ease-out, top 0.5s ease-out;
        z-index: 3;
        position: absolute;
    }

    .hitbox {
        height: 200px;
        width: 120px;
        background: transparent;
        z-index: 2;   

    }

    .login-outline {
        height: 300px;
        width: 200px;
        border: 5px solid black;
        border-radius: 12px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: bisque;
        z-index: 1;
    }


    h1 {
        position: absolute;
        top: 90px;
        left: 600px;
        width: 240px;
        text-align: center;

    }

    .RandomLetter {
        z-index: 3;
    }
</style>