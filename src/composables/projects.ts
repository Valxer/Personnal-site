export interface Project {
  name: string
  excerpt: string
  skills?: any
  image?: string
  link?: string
  livelink?: string
}

const project1: Project = {
  name: 'Personnal Website',
  excerpt: 'The site you are currently on. Used to display my projects and skills to anyone interested in them!',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'WindiCSS', 'GIT', 'Github'],
  image: '/Website.webp',
  link: 'https://levanphungk.com/',
  livelink: 'hhtps://levanphungk.com/',
}
const project2: Project = {
  name: 'Munchkin Character Sheet',
  excerpt: 'A personnal application used to create characters and follow their progreesion in  the Munchkin board game.',
  skills: ['VUE', 'HTML', 'SASS', 'Javascript', 'GIT', 'Github'],
  image: '/Munchkin.webp',
  link: 'https://munchkincharsheet.netlify.app/',
  livelink: 'https://munchkincharsheet.netlify.app/',
}
const project3: Project = {
  name: 'Oh My Food',
  excerpt: 'Formation Project : Front-End integration of a restaurant\'s website mockup. Card animations and responsive display were up to the imagination',
  image: '/Ohmyfood.webp',
  skills: ['HTML', 'SASS', 'GIT', 'Github'],
}
const project4: Project = {
  name: 'Reservia',
  excerpt: 'Formation Project : Mockup integration of a rental website.',
  image: '/Reservia.webp',
  skills: ['HTML', 'CSS', 'GIT', 'Github'],
}

export const projects: Project[] = []
projects.push(project1)
projects.push(project2)
projects.push(project3)
projects.push(project4)
