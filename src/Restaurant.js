import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Rest.css'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { getMovies } from './actions/dataActions';
import { useDispatch, useSelector } from 'react-redux';



function Restaurant() {

  // const [restList, setRest] = useState([])

  //api to access data
  // const getData = async () => {
  //   const result = await fetch('/restaurants.json')
  //   result.json().then(data => setRest(data.restaurants))
  // }

  const dispatch = useDispatch()


  useEffect(() => {
    // console.log('hello');
    // getData()
    dispatch(getMovies)
  }, [])

  const {movieList}=useSelector(state=>state.reducer2)

  console.log(movieList);

  return (

    <div>


      <Carousel >
        <Carousel.Item className='carosel'>
          <img
            className="caroselimg d-block w-100 "
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/2018-et00357072-1681718285.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carosel'>
          <img
            className="caroselimg d-block w-100"
            src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/ponniyin-selvan--part-2-et00348725-1680776467.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>




      <div className='d-flex mt-5' style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
{movieList?(
        
        movieList.map(rest => (


            <Link id='link' to={`/viewRest/${rest.id}`}>
              <Card id='card' className='' style={{ width: '250px', margin: '15px', height: '550px' }}>
                <Card.Img id='image' style={{ height: '350px', }} variant="top" src={rest.photograph} />
                <Card.Body>
                  <Card.Title className='text-center text-white fw-bolder mt-4 fs-4'>{rest.name}</Card.Title>
                  <Card.Text className='text-center text-white'>
                    {rest.hours} <span className='ms-2 me-2'>|</span> {rest.genere}<span className='ms-2 me-2'>|</span>{rest.certification}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>


          ))
        

      
):""
}  
</div> 
 </div>
  )
}

export default Restaurant