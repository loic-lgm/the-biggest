import Image from 'next/image'
import gavel from "/public/img/gavel.png"

export default function Gavelimage() {
  return (
    <div className="">
      <Image
        src={gavel}
        width={50}
        height={50}
        alt="Picture of themis"
      />
    </div>
  )
}