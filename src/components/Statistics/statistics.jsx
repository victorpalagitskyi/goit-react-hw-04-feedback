export const Statistics = ({bad, good, neutral,total,percent}) => { 
    return (
 ( <div>
      <p>Good:{good}</p>
      <p>Netural:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percent}%</p>
   </div>
    )
)
}


