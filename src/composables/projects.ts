interface Project {
  name: string
  excerpt: string
  skills?: any
  image?: string
  link?: string
}

const project1: Project = {
  name: 'Personnal Website',
  excerpt: '',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'TailwindCSS', 'GIT', 'Github'],
  link: 'https://levanphungk.com/',
}
const project2: Project = {
  name: 'Munchkin Character Sheet',
  excerpt: 'A personnal application used to create characters and follow their progreesion in  the Munchkin board game.',
  skills: ['VUE', 'HTML', 'SASS', 'Javascript', 'GIT', 'Github'],
  link: 'https://levanphungk.com/',
}
const project3: Project = {
  name: 'Oui',
  excerpt: '',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'TailwindCSS', 'GIT', 'Github'],
  link: 'https://levanphungk.com/',
}
const project4: Project = {
  name: 'Non',
  excerpt: '',
  skills: ['VUE', 'HTML', 'SASS', 'Typescript', 'TailwindCSS', 'GIT', 'Github'],
  link: 'https://levanphungk.com/',
}

export const projects: Project[] = []
projects.push(project1)
projects.push(project2)
projects.push(project3)
projects.push(project4)
