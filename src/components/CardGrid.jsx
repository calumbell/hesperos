import React from 'react';
import * as styles from './CardGrid.module.scss';


export default function CardGrid({ 
  Card,     // The card component to be rendered
  data,     // Arr of data, each index = 1 card
  flatten,  // A fn. that formats props for Card cmpnt
}) {
  return (
    <div className={styles.cardGrid}>
      {data.map((item, i) => {
        return <Card key={i} data={flatten(item)}/>
      })}
    </div>
  )
}
