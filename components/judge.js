import Image from 'next/image'
import judgeImage from "/public/img/judge_court.png"

export default function JudgeImage() {
  return (
    <div className="">
      <Image
        src={judgeImage}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}