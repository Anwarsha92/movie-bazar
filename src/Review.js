import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({reviewList}) {
  return (
    <div>

<Accordion  className='w-100 container'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Top Reviews</Accordion.Header>
        <Accordion.Body>
          {
            reviewList.map(i=>
                
                <div>
                    <h5>{i.name}</h5>
                    <p>{i.date}</p>
                    <h4 className='text-warning'>Rating : {i.rating}</h4>
                    <p className='text-white opacity-50'>{i.comments}</p>
                    <hr />
                </div>
                
                )
          }
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
    </div>
  )
}

export default Review