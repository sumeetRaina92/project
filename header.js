import React from 'react';



import hbetimage from './hbetimage.jpg';
import hbetimage2 from './hbetimage2.jpg';
import hbetimage3 from './hbetimage3.jpg';

import ImageSlider, { Slide } from "react-auto-image-slider";

function Header() {
    return(
        <nav  class="bg-dark navbar-dark navbar">
            <div className="1ST">
                <h1  style={{ color: '#faea8a', fontSize: 50,fontFamily: 'TimesNewRomanPS-BoldItalicMT' }} >
                HARBANS BHALLA EDUCATIONAL TRUST<br/> </h1>
                <p  style={{ color: '#faea8a', fontSize: 20,fontFamily: 'TimesNewRomanPS-BoldItalicMT' }}> Change a Life.  Alter destiny</p>





                <ImageSlider  effectDelay={500} autoPlayDelay={2500} width={896}
        height={504}>
      
      <Slide >
        <img alt="img1" src={hbetimage} />
      </Slide>
      <Slide>
        <img alt="img2" src={hbetimage2}/>
      </Slide>
      <Slide>
        <img alt="img3" src={hbetimage3}/>
      </Slide>
    </ImageSlider>
               
                  
            </div>
            
                
        </nav>
        
        
    )
}
export default Header;