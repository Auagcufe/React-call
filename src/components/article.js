import ImageZoom from 'react-medium-image-zoom'
import React from 'react'

function MyComponent(props) {
    return (
      <div>
        <p>Look at these fancy pictures!</p>
   
        <ImageZoom
          image={{
            src: 'https://picsum.photos/100',
            alt: 'Golden Gate Bridge',
            className: 'img',
            style: { width: '50px' }
          }}
          zoomImage={{
            src: 'https://picsum.photos/1100',
            alt: 'Golden Gate Bridge'
          }}
        />
   
        <p>Thanks for watching!</p>
      </div>
    )
  }

  export default MyComponent;