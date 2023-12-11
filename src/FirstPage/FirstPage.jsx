import React from 'react';
import "../FirstPage/FirstPage.css"
import Navbar from './Navbar';
import Footer from './Footer';
import ImageOne from '../Images/ImageOne.png';
import ImageTwo from '../Images/ImageTwo.png';
import ImageThree from '../Images/ImageThree.png';
import ImageFour from '../Images/ImageFour.png';
import ImageFive from '../Images/ImageFive.png';
import ThirdDivImage from '../Images/Third-div-image.png';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css'
import OwlImage1 from '../Images/AowlImage.png'; 
import OwlImage2 from '../Images/AowlImage2.png'; 
import OwlImage3 from '../Images/Aowlimage3.png';
import SImage1 from '../Images/S-Image1.png'; 
import SImage2 from '../Images/S-image2.png';  
import SImage3 from '../Images/s-image3.png';  
import SImage4 from '../Images/S-image4.png';  
import SImage5 from '../Images/s-image5.png'; 
import SImage6 from '../Images/s-image6.png';
 import jsonData from '../FirstPage/data.json';

function FirstPage() {
  const item = {
    items: [
      <img src= {OwlImage1} style={{height:'60vh', width: '60vw'}}/>,
      <img src={OwlImage2} style={{height:'60vh', width: '60vw'}}/>,
      <img src={OwlImage3} style={{height:'60vh', width: '60vw'}}/>,
      <img src={OwlImage1} style={{height:'60vh', width: '60vw'}}/>
    ]
  }

  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};
  return (
    <div>
        <Navbar />
        <div className="Second-div">
        
        {
          jsonData.map(item => (

            <div className="col-2 children" key={item.id}>
            <img src={item.img} />
            <p>{"Silky Mixed Print Dress"}</p>
        </div>
          ))
        }
        
      </div>

      <div className="Third-div">
        <h2>How to care for linen</h2>
        <p>Easy, breezy, and lightweight, it's one of summer's defining fabrics. Learn how to look after your linen pieces with the help of our store care guide.</p>
        <img src={ThirdDivImage} alt="Care for Linen" />
      </div>

      
      <div className="Fourth-div" style={{marginLeft: '300px'}}>
      <h1>PRODUCTS</h1>
      <OwlCarousel options = {options}>
        {item.items}
      </OwlCarousel>
    </div>

    <div className="card-group">
      <div className="card card-margin">
        <img src={OwlImage1} alt="USA Men Tee Tops" className="card-img-top my-card-image" />
        <div className="card-body">
          <h5 className="card-title">USA</h5>
          <p className="card-text">MEN TEE TOPS</p>
        </div>
        <p>$26.00 - $55.00</p>
      </div>
      <div className="card card-margin">
        <img src={OwlImage2} alt="Italy Indigo Strapback" className="card-img-top my-card-image" />
        <div className="card-body">
          <h5 className="card-title">Italy</h5>
          <p className="card-text">INDIGO STRAPBACK</p>
        </div>
        <p>$30</p>
      </div>
      <div className="card card-margin">
        <img src={OwlImage3} alt="USA Indigo Dark T-Skirt" className="card-img-top my-card-image" />
        <div className="card-body">
          <h5 className="card-title">USA</h5>
          <p className="card-text">INDIGO DARK T-SKIRT</p>
        </div>
        <p>$26.00</p>
      </div>
    </div>

    <div className="Sixth-div">
      <div className="Sixth-div-col1">
        <div className="Sixth-div-row1">
          <img src={SImage1} alt="" className="img1" />
        </div>
        <div className="Sixth-div-row2">
          <img src={SImage4} alt="" className="img4" />
        </div>
      </div>
      <div className="Sixth-div-col2">
        <div className="Sixth-div-row3">
          <img src={SImage2} alt="" className="img2" />
        </div>
        <div className="Sixth-div-row4">
          <h2>the new nostalgia</h2>
          <p>
            Retro graphics and new sports tailoring needs for boys' summer essentials
          </p>
          <button>Shop Now</button>
        </div>
        <div className="Sixth-div-row5">
          <img src={SImage5} alt="" className="img5" />
        </div>
      </div>
      <div className="Sixth-div-col3">
        <div className="Sixth-div-row6">
          <img src={SImage3} alt="" className="img3" />
        </div>
        <div className="Sixth-div-row7">
          <img src={SImage6} alt="" className="img6" />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default FirstPage