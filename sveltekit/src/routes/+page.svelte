<script>
	import { Hero } from '$lib/components/organisms'
	import { Heading, Paragraph, Link } from '$lib/components/atoms'
	import missionImage from '$lib/assets/images/hero-background-01.jpg'
</script>

<svelte:head>
	<title>Home - NebulaXPlorer</title>
</svelte:head>

<section class="prose">
	<Heading>NEBULA - Xplorer</Heading>
	<Paragraph>NEBULA – Xplorer stands for “Netherlands Educational Satellite for Exploration of Binary-Linked Astrophysics – X-ray Observer”. </Paragraph>
	<Paragraph>About 400 students will join SRON, 14 Dutch educational institutions and many industrial partners in developing this space mission from start to finish, led by scientists and engineers.</Paragraph>
	<Paragraph>The mission has two goals. The scientific goal is to better understand how a black hole captures material from a companion star. </Paragraph>
	<Paragraph>The educational goal is for students from Dutch educational institutions to experience first hand how to build a space mission from the ground up. SRON is leading the NEBULA – Xplorer mission, contributing to a new generation of scientists, designers and technicians for Dutch space research.</Paragraph>
	<Link href="/mission" text="Read about our missie" size="sm" bold stretched={false} color="var(--color-accent-mid)"/>
</section>

hh