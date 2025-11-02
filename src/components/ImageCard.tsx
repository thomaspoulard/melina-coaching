import Image, { ImageProps } from 'next/image'

const basePath = process.env.BASE_PATH;

const ImageCard = ({ src, ...rest }: ImageProps) => (
  <Image src={`${basePath || ''}${src}`} width={0} height={0} sizes="500px" className='relative h-full w-full object-cover sm:max-h-[500px]' {...rest} />
)

export default ImageCard
