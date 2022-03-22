export interface Project {
  name: string
  excerpt: string
  skills?: any
  image?: string
  image_small?: string
  link?: string
  livelink?: string
}

const project1: Project = {
  name: 'Personnal Website',
  excerpt: 'The site you are currently on. Created to display my projects and skills to anyone interested in them!',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'WindiCSS', 'GIT', 'Github'],
  image: '/Website.webp',
  image_small: '/Website_small.webp',
  livelink: 'https://levanphungk.com/',
}
const project2: Project = {
  name: 'Munchkin Character Sheet',
  excerpt: 'A personnal application used to create characters and follow their progression in  the Munchkin board game.',
  skills: ['VUE', 'HTML', 'SASS', 'Javascript', 'GIT', 'Github'],
  image: '/Munchkin.webp',
  image_small: '/Munchkin_small.webp',
  link: 'https://github.com/Valxer/MunchkinCharSheet',
  livelink: 'https://munchkincharsheet.netlify.app/',
}
const project3: Project = {
  name: 'Oh My Food',
  excerpt: 'Formation Project : Front-End integration of a restaurant\'s website mockup. Card animations and responsive display were up to the imagination',
  image: '/Ohmyfood.webp',
  image_small: '/Ohmyfood_small.webp',
  skills: ['HTML', 'SASS', 'GIT', 'Github'],
  livelink: 'https://valxer.github.io/OHMYFOOD__OpenClassrooms-projet-3/',
  link: 'https://github.com/Valxer/OHMYFOOD__OpenClassrooms-projet-3',
}
const project4: Project = {
  name: 'Reservia',
  excerpt: 'Formation Project : Mockup integration of a rental website.',
  image: '/Reservia.webp',
  image_small: '/Reservia_small.webp',
  skills: ['HTML', 'CSS', 'GIT', 'Github'],
  livelink: 'https://valxer.github.io/RESERVIA__OpenClassrooms-Projet-2/',
  link: 'https://github.com/Valxer/RESERVIA__OpenClassrooms-Projet-2',
}
const project5: Project = {
  name: 'Three.js Playground',
  excerpt: 'I created a project in the sole purpose of playing with three.js and understanding its basics. I also used dat.GUI to dynamically change different settings of the 3d object and gsap to dynamically animate a light',
  image: '/Threejs.webp',
  image_small: '/Threejs_small.webp',
  skills: ['VUE', 'Three.js', 'dat.GUI', 'gsap', 'Javascript', 'HTML', 'SASS', 'GIT', 'Github'],
  livelink: 'https://three-js-playground.netlify.app/',
  link: 'https://github.com/Valxer/Three.js-Playground',
}

export const projects: Project[] = []
projects.push(project1)
projects.push(project2)
projects.push(project3)
projects.push(project4)
projects.push(project5)
