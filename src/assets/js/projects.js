const projects = [
	{
		id: 1,
		title: 'Portfolio',
		image: 'images/project-images/portfolio.jpg',
		technologies: ['Vue.js 2', 'SCSS'],
		description: 'Portfolio creado con Vue.js 2',
		github_link: 'https://github.com/avelezdo/portfolio-vue',
		production_link: 'https://www.albertovelez.dev',
	},
	{
		id: 2,
		title: 'Perfiles',
		image: 'images/project-images/profiles.jpg',
		technologies: ['Vue.js 2', 'SCSS', 'Node.js/Express', 'Vuetify'],
		description: 'Lista, guarda y elimina perfiles de la API RandomAPI',
		github_link: 'https://github.com/avelezdo/profiles',
		production_link: 'https://upbeat-aryabhata-18e9a5.netlify.app/',
	},
	{
		id: 3,
		title: 'Clon YouTube',
		image: 'images/project-images/YouTubeClone.jpg',
		technologies: ['Vue.js 3', 'Vite', 'WindiCSS'],
		description: 'Clon de YouTube. Mobile First.',
		github_link: 'https://github.com/avelezdo/YouTube-clon',
		production_link: '',
	},
	{
		id: 4,
		title: 'Campeonato de tenis',
		image: 'images/project-images/tennis-championship.jpg',
		technologies: ['Vue.js 3', 'Vite', 'SCSS'],
		description: 'Web del I Campeonato de tenis de Tomares',
		github_link: 'https://github.com/avelezdo/tennis-championship',
		production_link: 'https://tenis-tomares.netlify.app/',
	},
];

export { projects };