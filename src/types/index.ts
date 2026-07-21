export interface Drink {
  id: number
  slug: string
  name: string
  price: number
  image: string
  specification?: {
    specificationIcon: string
    specificationText: string
  }[]
}

export interface NavItem {
  label: string
  href: string
}
