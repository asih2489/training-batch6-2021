import Image from 'next/image'

function Home({src= "", alt="", width= 500, height= 5000}) {
  return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
  )
}

export default Home