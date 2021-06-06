import { useState } from 'react'

const data = [
  {
    id: 333,
    subject: 'Biologia',
    description:'Poríferos;\nCnidários;\nPlatelmintos;\nNematelmintos.',
    value: 10,
    date: '07/06/2021'
  },
  {
    id: 33,
    subject: 'Sociologia',
    description:'Prova em grupo valendo 3 pontos.',
    value: 3,
    date: '07/06/2021'
  },
  {
    id: 9958,
    subject: 'Física',
    description:'Prova individual com 10 questões valendo 3 pontos.',
    value: 6,
    date: '09/06/2021'
  },
  {
    id: 9953,
    subject: 'Química',
    description:'Prova individual com 14 questões objetivas valendo 10 pontos.',
    value: 10,
    date: '10/06/2021'
  },
  {
    id: 141,
    subject: 'Língua Portuguesa',
    description:'Nunca se sabe o que vai cair na prova dela...',
    value: 10,
    date: '10/06/2021'
  },
  {
    id: 13,
    subject: 'Linguagem de Programação III',
    description:'Hackaton 2D - Desenvolvimento de um jogo que ensine algo.',
    value: 10,
    date: '28/06/2021'
  },
  {
    id: 934,
    subject: 'Matéria teste',
    description:'Não tem nada',
    value: 10,
    date: '07/06/2021'
  },
  {
    id: 545,
    subject: 'Matéria teste',
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    value: 10,
    date: '07/06/2021'
  },
  {
    id: 6,
    subject: 'Matéria teste',
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    value: 10,
    date: '07/06/2021'
  },
  {
    id: 9898,
    subject: 'Matéria teste',
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    value: 10,
    date: '07/06/2021'
  },
  {
    id: 2222,
    subject: 'Matéria teste',
    description:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    value: 10,
    date: '07/06/2021'
  },
]

export default data