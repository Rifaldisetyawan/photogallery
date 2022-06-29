import React, { useState, useEffect } from 'react'
import { Modal } from 'antd';
import './gallery.scss'
import axios from 'axios';
const Gallery = () => {
    const [posts, setPost]=useState([])

    useEffect(()=>{
        update()
    },[])

    const update=()=>{
        axios.get('http://localhost:5000/images').then(response => {
            setPost(response.data)
        }).catch(err=>{
            console.log(err);
        })
    }

    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (posts) => {
        setTempImgSrc(posts);
        showModal()
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <>
            <Modal title="Preview Photo" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <img src={tempImgSrc} alt="" className='image-modal' />
            </Modal>
            <div className="gallery">
                {posts.map((post) => {
                    return (
                        <div className="pics" key={post._id} onClick={()=>getImg()}>
                            <img src={post.image} alt="" style={{ width: '100%' }} />
                            <div className="text">{post.text}</div>
                        </div>
                    )
                })

                }
            </div>
        </>
    )
}

export default Gallery