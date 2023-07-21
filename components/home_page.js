import JudgeImage from "./judge";
import PresentationText from "./presentation_text";

import '../styles/home.css'

export default function HomePage() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-3xl p-12">Bienvenue sur Qui a la plus grosse !</h1>
        <JudgeImage />
        <PresentationText />
      </div>
    )
  }
  