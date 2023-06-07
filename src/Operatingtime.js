import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Operatingtime({workingTime}) {


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
        <Button style={{backgroundColor:'maroon'}} onClick={handleShow}>
        Cast & Crew
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><h2 className="text-warning" >Cast</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item><img className='me-3' style={{borderRadius:'50%', width:'100px',justifyContent:'space-between'}} src={workingTime.castim1} alt="" /> {workingTime.castn1}   </ListGroup.Item>
      <ListGroup.Item><img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.castim2} alt="" /> {workingTime.castn2} </ListGroup.Item>
      <ListGroup.Item> <img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.castim3} alt="" /> {workingTime.castn3}</ListGroup.Item>
      <ListGroup.Item> <img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.castim4} alt="" />{workingTime.castn4}</ListGroup.Item>
      <ListGroup.Item> <img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.castim5} alt="" />{workingTime.castn5}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>


        <Modal.Header>
          <Modal.Title><h2 className="text-warning" >Crew</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item><img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.crewim1} alt="" /> {workingTime.crewn1}   </ListGroup.Item>
      <ListGroup.Item><img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.crewim2} alt="" /> {workingTime.crewn2} </ListGroup.Item>
      <ListGroup.Item> <img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.crewim3} alt="" /> {workingTime.crewn3}</ListGroup.Item>
      <ListGroup.Item> <img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.crewim4} alt="" />{workingTime.crewn4}</ListGroup.Item>
      <ListGroup.Item> <img className='me-3' style={{borderRadius:'50%', width:'100px'}} src={workingTime.crewim5} alt="" />{workingTime.crewn5}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Operatingtime