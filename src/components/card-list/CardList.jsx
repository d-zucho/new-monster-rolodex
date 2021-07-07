import React from 'react'
import { Card } from '../card/Card'
import './card-list.styles.css'

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}>
          {monster.name}
        </Card>
      ))}
      {/* Passing monster in as a prop in the h1, is passing the individual monster (through the map function) as a prop to the Card Component */}
    </div>
  )
}
