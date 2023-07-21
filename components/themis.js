import Image from 'next/image'
import themis from "/public/img/themis.png"

export default function ThemisImage() {
  return (
    <div className="">
      <Image
        src={themis}
        width={500}
        height={500}
        alt="Picture of themis"
      />
    </div>
  )
}