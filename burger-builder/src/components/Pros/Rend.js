import React, {Component} from 'react';
import Pros from './Pros';
import Carousel from 'react-bootstrap/Carousel';


function rend () {
  const products = [
    {
      id:0,
    title : 'T-shirt',
    icon : 'https://via.placeholder.com/150',
    description : 'Nice red T-shirt',
    price : '£50'
    },
    {
      id:1,
    title : 'Shirt',
    icon : 'https://via.placeholder.com/150',
    description : 'Nice blue Shirt',
    price : '£20'
    },
    {
      id:2,
    title : 'Shirt',
    icon : 'https://via.placeholder.com/150',
    description : 'Nice blue Shirt',
    price : '£20'
    },
  ]



  let  arr = products.map(p => <Pros title={p.title} src={p.icon} description={p.description} price={p.price} />);
    return (
      <Carousel className="h container">
        {arr}
      </Carousel>
    )
   
}

// class Rend extends Component {
//   render() {
//     const products = [
//       {
//         id:0,
//       title : 'T-shirt',
//       icon : 'https://via.placeholder.com/150',
//       description : 'Nice red T-shirt',
//       price : '£50'
//       },
//       {
//         id:1,
//       title : 'Shirt',
//       icon : 'https://via.placeholder.com/150',
//       description : 'Nice blue Shirt',
//       price : '£20'
//       },
//       {
//         id:2,
//       title : 'Shirt',
//       icon : 'https://via.placeholder.com/150',
//       description : 'Nice blue Shirt',
//       price : '£20'
//       },
//     ]
//     let  arr = products.map(p => <Pros
//                 key={p.id}
//                 title={p.title}
//                 src={p.icon} 
//                 description={p.description}
//                 price={p.price} />);
//     return (
//         <Carousel className="h container">
//           {arr}
//         </Carousel>
//     )
//   }
// }

export default rend;