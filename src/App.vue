<script setup>
	import Navbar from './components/Navbar.vue'
	import About from './components/About.vue'
	import Work from './components/Work.vue'
	import Projects from './components/Project.vue'
	import Footer from './components/Footer.vue'

	import initScroll from './assets/js/scroll.js'
	import { onMounted } from 'vue'
	onMounted(() => {
		initScroll()
	})
</script>

<template>
	<div id="app">
		<Navbar />
		<div class="container">
			<About />
			<Work />
			<Projects />
		</div>
		<Footer />
	</div>
</template>
