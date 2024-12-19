
const Add = () => {
  const numbers: number [] = [1,1,2,3,4,2]
  return (
    <div>
      {numbers.map((num)=>(
        <ul key={num}>
          <li>this is {num}</li>
        </ul>
      )
      )}
    </div>
  )
}

export default Add
