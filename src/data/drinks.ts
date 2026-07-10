import type { Drink } from '../types'

import classicImg from '../../images/drinks/classic.webp'
import blueberryImg from '../../images/drinks/blueberry.webp'
import jasmineImg from '../../images/drinks/jasmine.webp'
import strawberryImg from '../../images/drinks/strawberry.webp'
import coconutImg from '../../images/drinks/coconut.webp'

export interface DrinkTheme {
  cardBg: string
  accent: string
  accentHover: string
  titleText: string
}

export const drinkThemes: Record<string, DrinkTheme> = {
  classic: { cardBg: '#8ba888', accent: '#4a7c59', accentHover: '#3a6347', titleText: '#8ba888' },
  blueberry: { cardBg: '#908b97', accent: '#6b52a8', accentHover: '#6b52a8', titleText: '#6b52a8' },
  jasmine: { cardBg: '#f8de7e', accent: '#b89c3a', accentHover: '#9e8530', titleText: '#b89c3a' },
  strawberry: {
    cardBg: '#dfb9b9',
    accent: '#c25c5c',
    accentHover: '#a84848',
    titleText: '#c25c5c',
  },
  coconut: {
    cardBg: '#D9CCAE',
    accent: '#c2a25c',
    accentHover: '#a88f48',
    titleText: '#c2a25c',
  },
}

export const drinks: Drink[] = [
  {
    id: 1,
    slug: 'classic',
    name: 'КЛАССИЧЕСКАЯ МАТЧА',
    price: 1500,
    description: 'Традиционный матча-латте на растительном молоке с глубокими нотками умами',
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
