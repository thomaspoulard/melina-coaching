import Image, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH;

const ImageCard = ({ src, ...rest }: ImageProps) => (
  <div>
    <Image src={`${basePath || ''}${src}`} {...rest} />
  </div>
)

export default ImageCard
