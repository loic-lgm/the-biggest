import Image from 'next/image'
import themis from "/public/img/themis.png"

export default function ThemisImage() {
  return (
    <div className="">
      <Image
        src={themis}
        width={200}
        height={200}
        alt="Picture of themis"
        className=''
      />
    </div>
  )
}