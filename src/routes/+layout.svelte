<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<nav> 
	<a href="/">Home</a>
	<a href="/photoapp">Photo App</a>
	<a href="/register">register</a>
</nav>



<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
