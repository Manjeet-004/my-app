// Home (pages/index.js)

import React from 'react';
import { Image, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded />
      <Row>
        <Col md={6}>
          <h2>Welcome to the Metropolitan Museum of Art</h2>
          <p>The Metropolitan Museum of Art, colloquially "the Met", is located in New York City and is the largest art museum in the United States. With 6,479,548 visitors to its three locations in 2019, it was the fourth most visited art museum in the world.</p>
        </Col>
        <Col md={6}>
          <p><a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Read more on Wikipedia</a></p>
        </Col>
      </Row>
    </>
  );
}



// export default function Home() {
//   return (
//     <>
//       <Image src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" fluid rounded />
//       <Row>
//         <Col md={6}>
//           <h2>Welcome to the Metropolitan Museum of Art</h2>
//           <p>The Metropolitan Museum of Art, colloquially "the Met", is located in New York City and is the largest art museum in the United States. With 6,479,548 visitors to its three locations in 2019, it was the fourth most visited art museum in the world.</p>
//         </Col>
//         <Col md={6}>
//           <p><a href="https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art" target="_blank" rel="noreferrer">Read more on Wikipedia</a></p>
//         </Col>
//       </Row>
//     </>
//   );
// }