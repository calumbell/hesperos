import React from 'react';
import * as styles from './CardGrid.module.scss';


const CardGrid = ({ 
  Card,     // The card component to be rendered
  data,     // Arr of data, each index = 1 card
  flatten,  // A fn. that formats props for Card cmpnt
  size,     // 'large' or 'small'
}) => {
  const cardStyles = {
    'small':  styles.cardGridSm,
    'medium': styles.cardGridMd,
    'large':  styles.cardGridLg,
  }
  return (
    <ul className={cardStyles[size]}>
      {data.map((item, i) => {
        return <Card key={i} data={flatten(item)} />
      })}
    </ul>
  )
}

export default CardGrid;