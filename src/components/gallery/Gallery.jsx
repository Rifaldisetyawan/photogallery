import React, { useState } from 'react'
import { Modal } from 'antd';
import './gallery.scss'
import img1 from '../../img/1.png'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.gif'

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
            text: 'image'
        },
        {
            id: 2,
            imgSrc: img2,
            text: 'image'
        },
        {
            id: 3,
            imgSrc: img3,
            text: 'image'
        },
        {
            id: 4,
            imgSrc: img4,
            text: 'image'
        },
        {
            id: 5,
            imgSrc: img5,
            text: 'image'
        },
        {
            id: 6,
            imgSrc: img6,
            text: 'image'
        },
    ]
    const [tempImgSrc, setTempImgSrc] = useState('')
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
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
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={()=>getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
                            <div className="text">{item.text}</div>
                        </div>
                    )
                })

                }
            </div>
        </>
    )
}

export default Gallery