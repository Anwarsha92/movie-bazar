import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Operatingtime from './Operatingtime'
import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';
import './Restview.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from './actions/dataActions';








function Restview() {

  // const [restList, setRest] = useState([])


  // const getData = async () => {
  //   const result = await fetch('/restaurants.json')
  //   result.json().then(data => setRest(data.restaurants))

  // }


  const dispatch = useDispatch()


  const params = useParams()


  const { movieList } = useSelector(state => state.reducer2)

  const singleRest = movieList.find(i => i.id == params.id)

  console.log(singleRest);



  useEffect(() => {
    // getData()
    dispatch(getMovies)
  }, [])

  return (


    <div >
      {singleRest ?


        (
          <div id='background' style={{ minHeight: '100vh' }} >

            <div id='backgroundimage' style={{ backgroundImage: `url(${singleRest.background})` }}  >

              <div className='container' id='flex'>
                <div id='poster' className=''> <img style={{}} src={singleRest.photograph} alt="" /></div>

                <div className='ListGroup ms-5' style={{ lineHeight: '50px' }}>
                  {/* <ListGroup.Item style={{border:'none'}}><h1 className='text-warning'><strong>{singleRest.name}</strong></h1></ListGroup.Item>
                <ListGroup.Item style={{border:'none'}}><p>{singleRest.neighborhood}</p></ListGroup.Item>
                <ListGroup.Item style={{border:'none'}}><p>{singleRest.address}</p></ListGroup.Item>
                <ListGroup.Item style={{border:'none'}}><p>{singleRest.cuisine_type}</p></ListGroup.Item> */}

                  <h1 className='text-white '><strong>{singleRest.name}</strong></h1>
                  <p className='p-1 rounded text-black' style={{ backgroundColor: 'white', display: 'inline' }}>{singleRest.language}</p>
                  <p className='text-white ms-2' style={{ display: 'inline' }}>{singleRest.rating}</p><br />
                  <p className='text-white me-2 ' style={{ display: 'inline' }}>{singleRest.hours}</p><span className='text-white '>|</span>
                  <p className='text-white ms-2 me-2' style={{ display: 'inline' }}>{singleRest.genere}</p><span className='text-white '>|</span>
                  <p className='text-white ms-2 me-2' style={{ display: 'inline' }}>{singleRest.certification}</p><span className='text-white '>|</span>
                  <p className='text-white ms-2' style={{ display: 'inline' }}>{singleRest.releasedate}</p> <br />

                  <div>
                    <iframe title='title1' height="200" src={singleRest.trailer}>
                    </iframe>
                  </div>


                </div>
              </div>
            </div>

            <div className='container mt-5'>

              <div id='descrbelw' className='mb-2'>
                <h1 className=' '><strong>{singleRest.name}</strong></h1>
                <p className='text-black p-1 rounded' style={{ backgroundColor: 'white', display: 'inline' }}>{singleRest.language}</p>
                <p className=' ms-2' style={{ display: 'inline' }}>{singleRest.rating}</p><br />
                <p className=' me-2 ' style={{ display: 'inline' }}>{singleRest.hours}</p><span>|</span>
                <p className=' ms-2 me-2' style={{ display: 'inline' }}>{singleRest.genere}</p><span>|</span>
                <p className=' ms-2 me-2' style={{ display: 'inline' }}>{singleRest.certification}</p><span>|</span>
                <p className='ms-2' style={{ display: 'inline' }}>{singleRest.releasedate}</p> <br />


                <div>
                  <iframe title='title12' height="200" src={singleRest.trailer}>
                  </iframe>
                </div>
              </div>

              <h3><strong>About the movie</strong></h3>

              <p className=''>{singleRest.about}</p>

              <hr />


              <div className='mb-5' style={{ border: 'none' }}> <Operatingtime workingTime={singleRest.cast} /></div>

              <ListGroup.Item className='mb-5'  style={{border:'none'}}> <Review reviewList={singleRest.reviews}/></ListGroup.Item>

            </div>









          </div>
        ) : ""
      }
    </div>
  )
}

export default Restview