import type { Drink } from '../types'

import classicImg from '../../images/drinks/classic.webp'
import blueberryImg from '../../images/drinks/blueberry.webp'
import jasmineImg from '../../images/drinks/jasmine.webp'
import strawberryImg from '../../images/drinks/strawberry.webp'
import coconutImg from '../../images/drinks/coconut.webp'

import berryIcon from '../../images/icons/berryIcon.svg'
import coldIcon from '../../images/icons/coldIcon.svg'
import creamIcon from '../../images/icons/creamIcon.svg'
import hotIcon from '../../images/icons/hotIcon.svg'
import milkIcon from '../../images/icons/milkIcon.svg'
import sweetIcon from '../../images/icons/sweetIcon.svg'
import teaIcon from '../../images/icons/teaIcon.svg'
import flowerIcon from '../../images/icons/flowerIcon.svg'

export interface DrinkTheme {
  sectionBg: string
  cardBg: string
  accent: string
  accentHover: string
  titleText: string
  specification?: {
    specificationIcon: string
    specificationText: string
  }[]
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
    name: 'КЛАССИЧЕСКАЯ',
    price: 1500,
    image: classicImg,
    specification: [
      {
        specificationIcon: hotIcon,
        specificationText: 'Горячий',
      },
      {
        specificationIcon: coldIcon,
        specificationText: 'Холодный',
      },
      {
        specificationIcon: milkIcon,
        specificationText: 'Молочный',
      },
      {
        specificationIcon: creamIcon,
        specificationText: 'Сливочный',
      },
    ],
  },
  {
    id: 2,
    slug: 'blueberry',
    name: 'ЧЕРНИЧНАЯ',
    price: 1700,
    image: blueberryImg,
    specification: [
      {
        specificationIcon: hotIcon,
        specificationText: 'Горячий',
      },
      {
        specificationIcon: coldIcon,
        specificationText: 'Холодный',
      },
      {
        specificationIcon: berryIcon,
        specificationText: 'Ягодный',
      },
      {
        specificationIcon: sweetIcon,
        specificationText: 'Сладкий',
      },
    ],
  },
  {
    id: 3,
    slug: 'jasmine',
    name: 'ЖАСМИНОВАЯ',
    price: 1850,
    image: jasmineImg,
    specification: [
      {
        specificationIcon: coldIcon,
        specificationText: 'Холодный',
      },
      {
        specificationIcon: teaIcon,
        specificationText: 'Чайный',
      },
      {
        specificationIcon: flowerIcon,
        specificationText: 'Цветочный',
      },
      {
        specificationIcon: creamIcon,
        specificationText: 'Сливочный',
      },
    ],
  },
  {
    id: 4,
    slug: 'strawberry',
    name: 'КЛУБНИЧНАЯ',
    price: 1850,
    image: strawberryImg,
    specification: [
      {
        specificationIcon: hotIcon,
        specificationText: 'Горячий',
      },
      {
        specificationIcon: coldIcon,
        specificationText: 'Холодный',
      },
      {
        specificationIcon: berryIcon,
        specificationText: 'Ягодный',
      },
      {
        specificationIcon: sweetIcon,
        specificationText: 'Сладкий',
      },
    ],
  },
  {
    id: 5,
    slug: 'coconut',
    name: 'КОКОСОВАЯ',
    price: 2000,
    image: coconutImg,
    specification: [
      {
        specificationIcon: hotIcon,
        specificationText: 'Горячий',
      },
      {
        specificationIcon: coldIcon,
        specificationText: 'Холодный',
      },
      {
        specificationIcon: milkIcon,
        specificationText: 'Молочный',
      },
      {
        specificationIcon: sweetIcon,
        specificationText: 'Сладкий',
      },
    ],
  },
]
