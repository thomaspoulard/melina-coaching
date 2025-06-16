/* eslint-disable @next/next/no-img-element */

import { nutritionContent } from '@/data/content'

const MasonryLayout: React.FC = () => {
  return (
    <section className="xl-gap-16 flex flex-col justify-between gap-8 lg:flex-row xl:gap-24">
      <div className="mx-auto self-center lg:w-1/2">
        <h2 className="leading-10">{nutritionContent.title}</h2>
        {nutritionContent.introduction && (
          <p className="-mt-4 mb-8 text-justify">
            {nutritionContent.introduction}
            <br />
          </p>
        )}

        <div className="flex flex-col gap-4 sm:gap-8">
          {nutritionContent.content.map((element, i) => {
            return (
              <div key={i}>
                <h3 className="mb-2">{element.subtitle}</h3>
                <p className="text-justify">{element.content}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="mx-auto sm:my-auto lg:mx-0 lg:w-1/2">
        <div className="columns-2 gap-4 lg:columns-2 lg:gap-8 [&>img:not(:first-child)]:mt-4 lg:[&>img:not(:first-child)]:mt-8">
          {nutritionContent.images?.map((image, i) => {
            return (
              <img
                key={i}
                className={`aspect-square rounded-xl object-cover ${i % 2 === 3 ? 'aspect-square' : ''}`}
                src={'/static/images/' + nutritionContent.imgSubDirectory + image.imgName}
                alt={image.imgAlt}
                loading="lazy"
              /*
    {...(image?.width ? { width: image.width } : {})}
    {...(image?.height ? { height: image.height } : {})}
  */
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MasonryLayout
