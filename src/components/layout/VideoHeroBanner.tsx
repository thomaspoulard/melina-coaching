type Props = {
  remoteFileUrl: string
  classNames?: string
}

const VideoHeroBanner = ({ remoteFileUrl, classNames }: Props) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      className={`relative -top-[104px] left-0 -mb-[104px] h-[75vh] max-h-[800px] w-full object-cover object-center shadow-[inset_0px_0px_0px_1000px_rgba(0,0,0,0.2)] md:h-[90vh]`}
    >
      <source src={`${remoteFileUrl}`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoHeroBanner
