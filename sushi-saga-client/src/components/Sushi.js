import React, { Fragment } from 'react'

const Sushi = ({sushi, handleSushiClick}) => {
  return (
    <div className="sushi" onClick={handleSushiClick} data-id={sushi.id}>
      <div className="plate"
           >
        {
          sushi.eaten ?
            null
          :
            <img src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
