import React, { useState } from 'react'
import './navbar.scss'
import { PoweroffOutlined, CameraOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Modal, Form } from 'react-bootstrap'
import axios from "axios"
import swal from 'sweetalert'

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState('')
  const [text, setText] = useState('')

  const handleText = (e) => {
    const val = e.target.value;
    setText(val)
  }

  const handleImage = (e) => {
    console.log(e.target.files);
    setImage(e.target.files[0])
  }

  const handleValidation = () => {
    if (text === '') {
        return false
    } else {
        return true
    }
}

  const handleApi = (event) => {
    event.preventDefault();
    if(handleValidation()){
      const url = 'http://localhost:5000/images'
    const formData = new FormData()
    formData.append('image', image)
    formData.append('text', text)
    axios.post(url, formData).then((res) => {
      console.log(res.data);

    })
    setImage(null)
    setText(null)
    setShow(false)
    swal({
      title: "Success",
      text: "Photo added",
      icon: "success",
      button: false,
      timer: 600
    })
    setTimeout(function () {
      window.location.reload();
  }, 700)
      .catch((err) => {
        console.log(err);
      })
    }else{
      alert('caption is required')
    }
    
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Caption</Form.Label>
              <Form.Control type="text" placeholder="Write Your Captions.." onChange={handleText} value={text} name="text" required/>
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control type="file" name='image' onChange={handleImage} accept="image/png, image/gif, image/jpeg" />
            </Form.Group>
          </Form>
          <Button type='primary' onClick={handleApi}>Submit</Button>
        </Modal.Body>
      </Modal>

      <div className="navbar">
        <div className="title">
          Photos Gallery</div>
        <div className="button-manager">
          <div className="usernamePage">
            <div className="userName">RifaldiSetyawan</div><Button type="danger" icon={<PoweroffOutlined />} style={{ borderRadius: '5px' }} />
          </div><Button icon={<CameraOutlined />} style={{
            borderRadius: '5px', backgroundColor: 'rgb(0, 195, 107)', border: 'none', color: '#fff',
            width: '40px', height: '40px',
          }} onClick={handleShow} />
        </div>
      </div>
    </>
  )
}

export default Navbar