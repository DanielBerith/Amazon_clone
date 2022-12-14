import React from 'react';
import './Home.css';
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
             className="home__image"
             src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
             alt="" />
            <div className="home__row">
                <Product
                id="13455"
                title="The Lean Startup: How constant Innovation Creates Radically Succeflully Businesses Papers"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
                />
                <Product
                id="134515"
                title="Aucma Stand Mixer,6.5-QT 660W 6-Speed Tilt-Head Food Mixer, Kitchen Electric Mixer with Dough Hook, Wire Whip & Beater (6.5QT, Blue)"
                price={118.99}
                rating={3}
                image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                id="134255"
                title="PlayStation 4 Pro 1TB Console"
                price={399.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/41GGPRqTZtL._AC_UY218_.jpg"
                />
                <Product
                id="13445"
                title="Echo Dot (3rd Gen) with Clock and Amazon Smart Plug - Sandstone"
                price={69.99}
                rating={4}
                image="https://m.media-amazon.com/images/I/51HWDb-OF1L._AC_UY218_.jpg"
                />
                <Product
                id="13485"
                title="2020 Lenovo Legion Y540 15.6 Inch FHD 1080P Gaming Laptop"
                price={1379.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/41bR7-RwfOL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                id="13405"
                title="Samsung C49HG90DMU 124.2 cm (48.9) Quantum Dot LED LCD Monitor - 32:9-1 ms - 3840 x 1080"
                price={1240.73}
                rating={4}
                image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
