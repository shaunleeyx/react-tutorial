import React from 'react'

const MyButton = ({count, setCount}) => {
    function increment(){
        setCount(count+1)
      }
      return(
        <button onClick = {increment}>
          clicked {count} 
        </button>
      )
}

export default MyButton