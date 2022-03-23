import React from 'react';
import * as styles from './CardGrid.module.scss';


const CardGrid = ({ 
  Card,     // The card component to be rendered
  data,     // Arr of data, each index = 1 card
  flatten,  // A fn. that formats props for Card cmpnt
  size,     // 'large' or 'small'
}) => {
  return (
    <div className={`d-grid mt-3
      ${size === 'small' ? styles.cardGridSm : styles.cardGridLg}`}
    >
      {data.map((item, i) => {
        return <Card key={i} data={flatten(item)}/>
      })}
    </div>
  )
}

export default CardGrid;