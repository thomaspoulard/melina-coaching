export interface INextImageElement {
  imgName: string
  imgAlt: string
  order?: number
  width?: number
  height?: number
}

export interface ICoachingActivity {
  slug: string
  title: string
  introduction: string
  shortDescription?: string
  description: string
  images?: Array<INextImageElement>
  items?: Array<string>
  conclusion?: string
}

export interface ICoachingSection {
  imgName: string
  imgAlt: string
  hasImage?: boolean,
  activities: Array<ICoachingActivity>
}
