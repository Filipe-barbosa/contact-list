
import mockData from '../mockData.json'
import Card from '../Card'

function CardSection () {
  const data = mockData
  return (
    <div className="flex justify-center gap-4 items-center border-t ">

      {data.map(({ name, type }
      ) =>
        (
          <Card key={Math.random()} cardName={name} cardCargo={type}/>)
      )}
    </div>
  )
}

export default CardSection
