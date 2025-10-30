export interface INextImageElement {
  imgName: string
  imgAlt: string
  order: number
  width?: number
  height?: number
}

export interface ICoachingActivity {
  key: string
  title: string
  introduction: string
  shortDescription?: string
  description: string
}

export interface ICoachingSection {
  imgName: string
  imgAlt: string
  activities: Array<ICoachingActivity>
}
