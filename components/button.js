export default function Button({buttonText, handleButtonClick}) {
    return (
        <button onClick={handleButtonClick}>{buttonText}</button>
    )
}