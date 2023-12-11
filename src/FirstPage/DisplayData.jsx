import React from 'react';
import jsonData from '../FirstPage/data.json';


function DisplayData() {
  return (
    <div>
            {jsonData.map(item => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <img src={item.img} alt={item.title}/>
                    
                </div>
            ))}
    </div>
  )
}

export default DisplayData