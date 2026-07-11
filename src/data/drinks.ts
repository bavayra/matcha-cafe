import type { Drink } from '../types'

import classicImg from '../../images/drinks/classic.webp'
import blueberryImg from '../../images/drinks/blueberry.webp'
import jasmineImg from '../../images/drinks/jasmine.webp'
import strawberryImg from '../../images/drinks/strawberry.webp'
import coconutImg from '../../images/drinks/coconut.webp'

export interface DrinkTheme {
  sectionBg: string
  cardBg: string
  accent: string
  accentHover: string
  titleText: string
}

export const drinkThemes: Record<string, DrinkTheme> = {
  classic: {
    sectionBg: 'var(--color-classic-section-bg)',
    cardBg: 'var(--color-classic-bg)',
    accent: 'var(--color-classic-accent)',
    accentHover: 'var(--color-classic-hover)',
    titleText: 'var(--color-classic-title)',
  },
  blueberry: {
    sectionBg: 'var(--color-blueberry-section-bg)',
    cardBg: 'var(--color-blueberry-bg)',
    accent: 'var(--color-blueberry-accent)',
    accentHover: 'var(--color-blueberry-hover)',
    titleText: 'var(--color-blueberry-title)',
  },
  jasmine: {
    sectionBg: 'var(--color-jasmine-section-bg)',
    cardBg: 'var(--color-jasmine-bg)',
    accent: 'var(--color-jasmine-accent)',
    accentHover: 'var(--color-jasmine-hover)',
    titleText: 'var(--color-jasmine-title)',
  },
  strawberry: {
    sectionBg: 'var(--color-strawberry-section-bg)',
    cardBg: 'var(--color-strawberry-bg)',
    accent: 'var(--color-strawberry-accent)',
    accentHover: 'var(--color-strawberry-hover)',
    titleText: 'var(--color-strawberry-title)',
  },
  coconut: {
    sectionBg: 'var(--color-coconut-section-bg)',
    cardBg: 'var(--color-coconut-bg)',
    accent: 'var(--color-coconut-accent)',
    accentHover: 'var(--color-coconut-hover)',
    titleText: 'var(--color-coconut-title)',
  },
}

export const drinks: Drink[] = [
  {
    id: 1,
    slug: 'classic',
    name: 'КЛАССИЧЕСКАЯ МАТЧА',
    price: 1500,
    description: 'Традиционный матча-латте с глубокими нотками умами',
    image: classicImg,
  },
  {
    id: 2,
    slug: 'blueberry',
    name: 'ЧЕРНИЧНАЯ МАТЧА',
    price: 1700,
    description: 'Матча с пюре из свежей черники — цвет и вкус лета',
    image: blueberryImg,
  },
  {
    id: 3,
    slug: 'jasmine',
    name: 'ЖАСМИНОВАЯ МАТЧА',
    price: 1850,
    description: 'Деликатный букет с цветочными нотами жасмина — нежно и ароматно',
    image: jasmineImg,
  },
  {
    id: 4,
    slug: 'strawberry',
    name: 'КЛУБНИЧНАЯ МАТЧА',
    price: 1850,
    description: 'Яркая матча со свежей клубникой — сладкая, свежая, летняя',
    image: strawberryImg,
  },
  {
    id: 5,
    slug: 'coconut',
    name: 'КОКОСОВАЯ МАТЧА',
    price: 2000,
    description: 'Экзотическая матча с ароматом кокоса — сладкая и освежающая',
    image: coconutImg,
  },
]
