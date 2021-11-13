import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import slider1 from '../../../Images/Slider/slide1.jpg'
import slider2 from '../../../Images/Slider/slide2.jpg'
import slider3 from '../../../Images/Slider/slide3.jpg'

const Banner = () => {
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

      
        return (
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <Image className="d-block w-100" style={{height: 580}} src={slider1} alt="" />
              <Carousel.Caption >
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image className="d-block w-100" style={{height: 580}} src={slider2} alt="" />
      
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image className="d-block w-100" style={{height: 580}} src={slider3} alt="" />
      
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
      
      render()
          return ( <ControlledCarousel />);
      
    //   render(<ControlledCarousel />);
}
          
export default Banner;