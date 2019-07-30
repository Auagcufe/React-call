import React from 'react'
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import images from '../data/photos'

const MyGallery = function(props){
    return <ImageGallery items={images}/>
}

export default MyGallery;