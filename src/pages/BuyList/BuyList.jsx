import React from 'react'

const BuyList = ({buyList, setBuyList}) => {
  console.log(buyList)
  return (
    <div>
   
      {buyList.map((game)=>{
        console.log(game)
        return(
          <h1>{game.name}</h1>
        )
      })}
    </div>
  )
}

export default BuyList