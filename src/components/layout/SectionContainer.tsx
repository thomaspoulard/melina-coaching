import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function SectionContainer({ children }: Props) {
  return <section className="mx-auto px-5 lg:px-12 2xl:max-w-[1800px]">{children}</section>
}
