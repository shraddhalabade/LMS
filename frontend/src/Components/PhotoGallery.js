import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://i0.wp.com/thewomenslibrary.org.au/wp-content/uploads/2023/01/Herland2019_Mielamalyon-cropped-scaled.jpg?resize=1400%2C1054&ssl=1"
alt=''/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsI6gws7Z378ivRRBj-TgatjUJ7sHJ_lMZRg&s "alt=''/>
                <img src="https://www.culibrary.ac.in/assets/images/bnr/banner-3.jpg" alt=''/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFToRpnanMxaHLw2SYcX_a2wZk4QIvMT5WA&s" alt=''/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxbfWzLNTqGUmhcJIVJdIPROPXk-vGFrRgETDqgnCA_3I4ZgKi0BnmhNhXxn4u0ERaX0&usqp=CAU" alt=''/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpIpmzR1lIFM0koNd-Zs5Wz4Kuzme-aCRFFZc8QP0j44aQQz9oGTWjOu9mnpSpIdfHueI&usqp=CAU" alt=''/>
                <img src="https://hls.harvard.edu/wp-content/uploads/2022/07/09_20_13_Campus_Shots_BKraft095-800x1000.jpg" alt=''/>
                <img src="https://hls.harvard.edu/wp-content/uploads/2022/08/09_20_13_Campus_Shots_BKraft095-1-scaled.jpg" alt=''/>
             
            </div>
            <button>VIEW MORE<ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery

