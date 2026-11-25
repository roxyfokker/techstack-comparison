<script>
	import '@fontsource/space-grotesk/500.css';
  	import '@fontsource/space-grotesk/700.css';
  	import '@fontsource/space-mono/400.css';
  	import '@fontsource/space-mono/700.css';
  	import '@fontsource/roboto/400.css';
	import '@fontsource/roboto/500.css';
  	import '@fontsource/roboto/700.css';

	import favicon from '$lib/assets/favicon.svg';
	import '$lib/styles/stylesheet.css';
  
  	import Footer from '$lib/components/organisms/Footer.svelte';
  	import Locations from '$lib/components/organisms/Locations.svelte';

	import Header from '$lib/components/organisms/Header.svelte'
	import { pages } from '$lib/data/pages'

	let { children } = $props()

	import { onNavigate } from '$app/navigation'

	onNavigate((navigation) => {
		if (!document.startViewTransition) return

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve()
				await navigation.complete
			})
		})
	})
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="wrapper">
	<Header {pages} />

	<main id="main">
	{@render children()}
	</main>
</div>

<Locations />
<Footer />

<style>
	.wrapper{
		margin: 5rem 3.8rem;
	}
</style>