import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
class Pros extends Component {
  // render() {
  //   return (
  //     <div>
  //          <div>
  //             <div className='ttl'>
  //             <h1>{this.props.title}</h1>
  //           </div>
  //           <img
  //             className="x"
  //             src={this.props.src}
  //             alt="First slide"
  //           />
  //           <div className="caps">
  //           <h3>{this.props.description}</h3>
  //           <div><h1 className="prx">{this.props.price}</h1></div>
  //           </div>
  //           </div>
  //     </div>
  //   )
  // }
  render() {
        // return (
        //   <Carousel>
        //   <Carousel.Item className="cc">
            // <div>
            //   <div className='ttl'>
            //   <h1>{this.props.title}</h1>
            // </div>
            // <img
            //    className="d-block w-100"
            //   src={this.props.src}
            //   alt="First slide"
            // />
            // <div className="caps">
            // <h3>{this.props.description}</h3>
            // <div><h1 className="prx">{this.props.price}</h1></div>
            // </div>
            // </div>
        //   </Carousel.Item>
        //   </Carousel>)


        return (<Carousel>
          <Carousel.Item>
          <div>
              <div className='ttl'>
              <h1>{this.props.title}</h1>
            </div>
            <img
               className="d-block w-100"
              src={this.props.src}
              alt="First slide"
            />
            <div className="caps">
            <h3>{this.props.description}</h3>
            <div><h1 className="prx">{this.props.price}</h1></div>
            </div>
            </div>
          </Carousel.Item>
        </Carousel>)
      
    }
  }

  export default Pros;