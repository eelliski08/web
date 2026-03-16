<script>
	let top = 350;
	let left = 230;
    let x= 0;
    let y = 0;
	let items = [];
	import { onMount } from "svelte";
	let downmovment = 10;

	// up = 38
	// down = 40
	// right = 39
	// left = 37
	function onKeyDown(e) {
		 switch(e.keyCode) {

			 case 37:
				 x = -1//x>0? -1 :x-1;
				 break;
			 case 39:
				 x = 1//x<0? 1 :x+1;;
				 break;
		 }
	}
    


	setInterval(() => {
	items = items
		.map(item => ({ ...item, top: item.top + 2 }))
		.filter(item => item.top < 470);

	CheckCollision();
	}, 20);

	setInterval(() => {
	spawnItem();
	}, 800);
	
	function spawnItem() {
	const size = 30;
	const randomLeft = Math.random() * (500 - size);

	items = [
		...items,
		{
			left: randomLeft,
			top: 0
		}
	];
}

	onMount(() => {
	spawnItem();
	});

	function CheckCollision() {
		const playerSize = 50;
		const itemSize = 30;

		for (const item of items) {
		if (left < item.left + itemSize &&
			left + playerSize > item.left &&
			top < item.top + itemSize &&
			top + playerSize > item.top
		)
		{
			left = 230
			top = 350
			items = []
			spawnItem();
			break;
		}
		}
	}
	

	setInterval(() => {
	left += x;
	top += y;

	const playerSize = 50;
	const boxSize = 500;


	if (left < 0) left = 0;

	if (left > boxSize - playerSize)
		left = boxSize - playerSize;


	if (top < 0) top = 0;

	if (top > boxSize - playerSize)
		top = boxSize - playerSize;

}, 5);
</script>
<style>
	main {
		width: 500px;
		height: 500px;
		border: solid blue 1px;
		margin: 10px auto;
		position: relative;
	}
	div {
		width: 50px;
		height: 50px;
	
		position: absolute;
        transition: all ease;
	}

	.item {
    width: 50px;
    height: 50px;
    position: absolute;
}


   
</style>


<main>
	<img src="https://www.skiworld.co.uk/blog/wp-content/uploads/2025/01/erwan-hesry-ssl_J9ge2-w-unsplash-scaled.jpg" alt="bakgrund" height="500" width="500">

	<div style="left: {left}px; top: {top}px">
	<img src="nedladdning (1).png" alt="spleare" height="60" width="60">
	</div>
	

	{#each items as item}
    <div 
        class="item"
        style="left: {item.left}px; top: {item.top}px;">
		<img src="nedladdning.png" alt="tree" height="60" width="60">
    </div>
	{/each}
</main>


<svelte:window on:keydown|preventDefault={onKeyDown} />