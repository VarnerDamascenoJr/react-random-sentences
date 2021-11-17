import Button from "./Button"

const Cards = ({ sentences }) => {
  return (
    <div className='card' >
      <h2>{sentences.content}</h2>
      <p>{sentences.author}</p>
      <Button cta='Change' />
    </div>
  )
}

export default Cards
