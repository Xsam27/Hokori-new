import Image from 'next/image'

export default function ImageTest() {
  return (
    <div>
      <h2>Image Test</h2>
      <Image src="/images/exacura-logo.png" alt="Exacura Logo" width={192} height={96} />
      <Image src="/images/unitech-logo.png" alt="Unitech Logo" width={192} height={96} />
      <Image src="/images/placeholder.svg" alt="Placeholder" width={192} height={96} />
    </div>
  )
}

