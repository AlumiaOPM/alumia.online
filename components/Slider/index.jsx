import React, { Component } from "react";
import Slider from "react-slick";




export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true, 
      arrows:false,
      infinite: true,
      autoplay: true,
      speed: 300,
      accessibility: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      
      responsive: [
        
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            
          }
        }
      ]
    };
    
    return (
      <>
        <div style={{width:"60%", margin: "100px auto"}} >
          <div className="teste">
            <h2 style={{ textAlign: "center", paddingBottom: "100px", fontSize: "2rem", fontWeight: "600", fontFamily: "Josefin Sans" }}>Nossos parceiros</h2>
          </div>

          <div style={{margin: "10px 0"}} >

            <Slider {...settings}>
              <div style={{paddingRight:"10px  !important"}} >
                <img src="/parceiros/SaintLeo.png" alt="SaintLeo" title="SaintLeo" />
              </div>
              <div style={{paddingRight:"10px  !important"}} >
                <img src="/parceiros/ESPMnw.png" alt="ESPM" title="ESPM" />
              </div>
              <div style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/sing.png" alt="Instituto Singularidades" title="Instituto Singularidades" />
              </div>
              <div style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/Fecapnw.png" alt="Fecap" title="Fecap" />
              </div>
              <div  style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/dmi.png" alt="Digital Marketing Institute" title="Digital Marketing Institute" />
              </div>
              <div style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/unifemm.png" alt="Unifemm" title="Unifemm" />
              </div>
              <div style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/fmp.png" alt="FMP" title="FMP" />
              </div>
              <div style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/ens.png" alt="ENS" title="ENS" />
              </div>
              <div style={{paddingRight:"10px !important"}} >
                <img src="/parceiros/exc.png" alt="Executive Academy" title="Executive Academy" />
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
  }
}