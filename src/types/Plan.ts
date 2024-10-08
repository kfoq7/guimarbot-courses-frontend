export interface ContentPlan {
  description: string
  active: boolean
}

export interface Plan {
  id: number
  name: string
  price: number
  content: ContentPlan[]
}
