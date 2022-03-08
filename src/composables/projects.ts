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
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'TailwindCSS', 'GIT', 'Github'],
  image: '/public/Website.webp',
  link: 'https://levanphungk.com/',
  livelink: 'hhtps://levanphungk.com/',
}
const project2: Project = {
  name: 'Munchkin Character Sheet',
  excerpt: 'A personnal application used to create characters and follow their progreesion in  the Munchkin board game.',
  skills: ['VUE', 'HTML', 'SASS', 'Javascript', 'GIT', 'Github'],
  link: 'https://munchkincharsheet.netlify.app/',
  livelink: 'https://munchkincharsheet.netlify.app/',
}
const project3: Project = {
  name: 'Oui',
  excerpt: '',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'TailwindCSS', 'GIT', 'Github'],
}
const project4: Project = {
  name: 'Non',
  excerpt: '',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'TailwindCSS', 'GIT', 'Github'],
}

export const projects: Project[] = []
projects.push(project1)
projects.push(project2)
projects.push(project3)
projects.push(project4)
