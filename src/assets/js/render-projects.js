import { projects as myProjects } from './projects.js'

let skills = ['Proyectos recientes', 'Todos', 'SCSS', 'React', 'Vue.js 2', 'Vue.js 3', 'Node.js/Express']
let selectedSkill = null

let renderSkills = function (num) {
	let ul = document.querySelector('.list__skills'),
		newArr = skills.map((skill, index) => {
			if (index === Number.parseInt(num)) {
				selectedSkill = skill
				return `<li class="skill-selector skill__active" data-id="${index}">${skill}</li>`
			} else {
				return `<li class="skill-selector skill__inactive" data-id="${index}">${skill}</li>`
			}
		})
	ul.innerHTML = newArr.join('')
	attachSkillEvent()
}

function attachSkillEvent() {
	let skillSelectors = document.querySelectorAll('.skill-selector')
	const projectsDestination = document.querySelector('.projects')
	skillSelectors.forEach((skill) => {
		skill.addEventListener('mousedown', function (e) {
			renderSkills(e.target.dataset.id)
			renderProjects(filterProjects(selectedSkill))
			// using the scroll.js function to jump
			// down the page and view the projects
			if (window.scrollY <= 5) {
				scroll(projectsDestination)
			}
		})
	})
}

let renderProjects = function (arr, onload = false) {
	const projectList = document.querySelector('.list__projects'),
		allProjects = document.querySelectorAll('.project')
	allProjects.forEach((project, index) => {
		if (!onload) {
			project.classList.add(`project-exit-${index + 1}`)
		}
	})

	setTimeout(function () {
		projectList.innerHTML = arr
			.map((project, index) => {
				return `
        <li class="project project-enter-${index + 1}">
            <div class="project__info">
                <div class="project__header-row">
                    <p class="section__headline project__name">${project.title}</p>
                    <div>
                        ${addProductionLink(project)}
                        ${addGitHubLink(project)}
                    </div>
                </div>
                <p class="project__description section__copy">
                    ${project.description}
                </p>
                <ul class="project__tech" data-project-name="recordshare">
                    ${addTechnologies(project)}
                </ul>
            </div>
            <div>
                <img src="${project.image}" alt="${project.title} UI"
                data-project-name="${project.title.toLowerCase()}" class="img project__img">
            </div>
        </li>
    `
			})
			.join('')
	}, 500)

	document.querySelector('.projects-listed').innerHTML = `${arr.length} de ${myProjects.length} proyectos`
}

let addProductionLink = function (project) {
	return project.production_link !== ''
		? `            
            <a href="${project.production_link}" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABoklEQVRYhe2VSytFURTHd1HXY+AyUhhgJq+Z8AEMTGTEjIGZCbqJMJHHUISS6/INGKCY+AZmSCKPmdfAo+T5X511ardb+5xzb/dOtP/1q9Pea63/bp1z1lbKycnJKT3VgHGwD27BO3gDV+CA9xpyYdwMdsEP+I3AEejIhnExWALfhsENmAU9zJzyOmIeZBtUZmpOrTwXii6CAiG+ECwL8Q+gM13zLvAiFFvTYugQ7aDayE0KedTBoajmfeBLKPIISjiGvolLXjdbHAdPQj4xE2Y+qOwf2gbH5IMzbV16x5uWGsSEzXw0IInwW1hvrO+BKlAByjlmJKRWQjrAZEjSsOUAOnURD7Bg68JYQFKKY/LAqbB/wnukrYA68zZzXwlLIn1YcY5pAhfaHj038l4peLbUmAoz9zUAPoUCSS0mBtqYmLaeEvI+QH9Uc180Su+FYivKGzqmisCqEH8NWtM190W/2KFQlMYujd9eht7rnRFDv/M6KMvUXFc3OBYOIkFTbwe0ZMPYFLVyWnm3HV1IdBW/Ku/OoHlAs6I2F8ZOTk7/V3+PVt1EIz5h9QAAAABJRU5ErkJggg==" width="32"
                class="project__link">
            </a>`
		: ''
}

let addGitHubLink = function (project) {
	return project.github_link !== ''
		? `            
            <a href="${project.github_link}" target="_blank">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAllBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6C80qAAAAMXRSTlMA+OIxCfzx+uwW9VkPBgTYw9KFaCgk6ZR0YVJDIBrczcm0q48+LOa9ua+ffG5MR9SGVL+KuAAAAWdJREFUOMt9Uud6gzAMFB5swgwJ2aMZzWr9/i9XW3YgYL7eD8C6s3SSgA7x85jVnJ+z4sXAxnTmiBbu73pAs8ITPTjzpHf9R1jIgo6nvhgBWbX3NW8rTA6WykN+cT85/0pUFe1jpiJLYHdfuOl2uwnF+ZFAqaJzxVfoX9ULKmMpVg/sRXV7wJxrGKDCcAEQ6/l8DQWRnhiDUhuOh4LAF9rbN74XYGFuauRoJrYFAZq/AmbKYQQEawPqsjFBqhgP+P8ZOOCEw4nNM+zfhw2apbbghcQO9vieWbwhjqbd0J6kYwa00h+kP6pJU2PYCQAuMs+dCPcQTY3V5NTsQ4G4yeOSix2lRKo3BSBu5P0Heyd5VNtIg0XYrTRCsvM+laMoodmmB2a28ObrdWu4XkHCWoeGD5dg8HAEKU8V7QvCCFo0rvTo8ncXyPtP+ADdqZgRMLWkrIIe4jLlPDEC7uURgyFiStt8tKP/AN6xSzqdzJ8HAAAAAElFTkSuQmCC" width="32"
                class="project__link" alt="${project.title} Github Repo">
            </a>`
		: ''
}

let addTechnologies = function (project) {
	return project.technologies
		.map((tech) => {
			return `<li>${tech}</li>`
		})
		.join('')
}

let filterProjects = function (query) {
	if (selectedSkill === 'Todos') {
		return myProjects
	}
	if (selectedSkill === 'Proyectos recientes') {
		return myProjects.filter((_, index) => index < 3)
	}

	return myProjects.filter((p) => p.technologies.includes(query))
}

export { renderSkills, attachSkillEvent, renderProjects, myProjects }
