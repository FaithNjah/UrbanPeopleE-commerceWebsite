import React from 'react';
import NavBar from '../FirstPage/Navbar';
import './SecondPage.css'
import CollectionImageSrc from '../Images/collection image.png'; 
import Aowlimage3 from '../Images/Aowlimage3.png'; 
import CollectionImage2 from '../Images/collection-image-2.png';
import OwlImage3 from '../Images/owlImage3.png';
import AowlImage1 from '../Images/AowlImage.png'; 
import AowlImage2 from '../Images/AowlImage2.png'; 
import AowlImage3 from '../Images/Aowlimage3.png'

function SecondPage() {
  return (
    <div>
     <NavBar />
      <div className="catalog-second-div">
        <div className="collections-div">
          <div className="collections-list-div">
            <ul>
              <li className="h6">COLLECTIONS</li>
              <li>Accessories</li>
              <li>Jeans</li>
              <li>Men</li>
              <li>New collection</li>
              <li>Sales</li>
              <li>T-shirt</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="collection-image-div">
        <img src={CollectionImageSrc} alt="Collection" height="350px" width="250px" />
      </div>
      <div className="collection-product-div">
        <h6>Products</h6>
        <div className="collection-product-items">
          <div className="collection-product-item">
            <div className="image">
              <img src={Aowlimage3} alt="Indigo Dark Shirt" />
            </div>
            <div className="text">
              <p>Indigo Dark Shirt</p>
              <p>$20</p>
              <button>APERCU</button>
            </div>
          </div>
          <div className="collection-product-item">
            <div className="image">
              <img src={CollectionImage2} alt="Pigron T-shirt" />
            </div>
            <div className="text">
              <p>Pigron T-shirt</p>
              <p>$12</p>
              <button>APERCU</button>
            </div>
          </div>
          <div className="collection-product-item">
            <div className="image">
              <img src={OwlImage3} alt="Dot T-Skirt Cred" />
            </div>
            <div className="text">
              <p>Dot T-Skirt Cred</p>
              <p>$22</p>
              <button>APERCU</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-div">
            <div className="product-div-h1">
                <h1>PRODUCTS</h1>
            </div>
            <div className="product-div-list">
                <button className="totus">Totus</button>
                <button>Brand</button>
                <button>Clothes</button>
                <button>Fashion</button>
                <button>Trend</button>
                <button>Urban</button>
            </div>
            <div className="product-div-options">
                <div className="product-div-option1">
                    <p>Hello world</p>
                </div>
                <div className="product-div-option2">
                    <p>Hello world</p>
                </div>
            </div>
            <div className="product-div-images1">
                <div className="card-group">
                    <div className="card card-margin">
                        <img src={AowlImage1} alt="MEN TEE TOPS" className="card-img-top my-card-image" />
                        <div className="card-body">
                            <h5 className="card-title">USA</h5>
                            <p className="card-text">MEN TEE TOPS</p>
                            <p>$26.00 - $55.00</p>
                        </div>
                    </div>
                    <div className="card card-margin">
                        <img src={AowlImage2} alt="INDIGO STRAPBACK" className="card-img-top my-card-image" />
                        <div className="card-body">
                            <h5 className="card-title">Italy</h5>
                            <p className="card-text">INDIGO STRAPBACK</p>
                            <p>$30</p>
                        </div>
                    </div>
                    <div className="card card-margin">
                        <img src={AowlImage3} alt="INDIGO DARK T-SKIRT" className="card-img-top my-card-image" />
                        <div className="card-body">
                            <h5 className="card-title">USA</h5>
                            <p className="card-text">INDIGO DARK T-SKIRT</p>
                            <p>$26.00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-div-images2">
                <div className="card-group">
                    {/* Image cards for images2, can be the same or different */}
                    <div className="card card-margin">
                        <img src={AowlImage1} alt="MEN TEE TOPS" className="card-img-top my-card-image" />
                        <div className="card-body">
                            <h5 className="card-title">USA</h5>
                            <p className="card-text">MEN TEE TOPS</p>
                            <p>$26.00 - $55.00</p>
                        </div>
                    </div>
                    <div className="card card-margin">
                        <img src={AowlImage2} alt="INDIGO STRAPBACK" className="card-img-top my-card-image" />
                        <div className="card-body">
                            <h5 className="card-title">Italy</h5>
                            <p className="card-text">INDIGO STRAPBACK</p>
                            <p>$30</p>
                        </div>
                    </div>
                    <div className="card card-margin">
                        <img src={AowlImage3} alt="INDIGO DARK T-SKIRT" className="card-img-top my-card-image" />
                        <div className="card-body">
                            <h5 className="card-title">USA</h5>
                            <p className="card-text">INDIGO DARK T-SKIRT</p>
                            <p>$26.00</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        
    </div>
  )
}

export default SecondPage