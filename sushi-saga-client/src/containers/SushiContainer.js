import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushis.slice(props.i, props.i+4).map((sushi) => {
            return <Sushi key={sushi.id} sushi={sushi} handleSushiClick={props.handleSushiClick}/>
          })
        }
        <MoreButton handleMoreClick={props.handleMoreClick} startI = {props.i}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
