
export const FeedbackOptions = ({handleClickIncrement}) => {

    return (  
         <div style={{ display: 'flex', gap: "10px", fontSize: 50  }}>
            <button style={{ fontSize: 50}} onClick={() => handleClickIncrement('good')}>Good</button>
            <button style={{ fontSize: 50}} onClick={() => handleClickIncrement('neutral')}>Netural</button>
            <button style={{ fontSize: 50}} onClick={() => handleClickIncrement('bad')}>Bad</button>
          </div>
        )

}