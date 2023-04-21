
export const FeedbackOptions = ({handleClick}) => {

    return (  
         <div style={{ display: 'flex', gap: "10px", fontSize: 50  }}>
        <button style={{ fontSize: 50 }} name='good' onClick={handleClick}>Good</button>
        <button style={{ fontSize: 50 }} name='neutral' onClick={handleClick}>Netural</button>
          <button style={{ fontSize: 50}} name="bad" onClick={handleClick}>Bad</button>
          </div>
        )

}