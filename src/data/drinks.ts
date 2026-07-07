import type { Drink } from '../types'

import classicImg from '../../images/drinks/classic.webp'
import blueberryImg from '../../images/drinks/blueberry.webp'
import jasmineImg from '../../images/drinks/jasmine.webp'
import strawberryImg from '../../images/drinks/strauberry.webp'

export const drinks: Drink[] = [
  {
    id: 1,
    slug: 'classic',
    name: 'Классический матча',
    price: 290,
    description: 'Традиционный матча латте на растительном молоке с глубокими нотками умами',
    image: classicImg,
  },
  {
    id: 2,
    slug: 'blueberry',
    name: 'Черничный матча',
    price: 320,
    description: 'Матча с пюре из свежей черники — цвет и вкус лета',
    image: blueberryImg,
  },
  {
    id: 3,
    slug: 'jasmine',
    name: 'Жасминовый матча',
    price: 310,
    description: 'Деликатный букет с цветочными нотами жасмина — нежно и ароматно',
    image: jasmineImg,
  },
  {
    id: 4,
    slug: 'strawberry',
    name: 'Клубничный матча',
    price: 320,
    description: 'Яркий матча со свежей клубникой — сладкий, свежий, летний',
    image: strawberryImg,
  },
]
