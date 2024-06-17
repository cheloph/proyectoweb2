import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export default function Consolas() {
  return (
    <div className='bodyMenu'>
            <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UF1000,1000_QL80_.jpg" />
        <Card.Body>
          <Card.Title>PS5</Card.Title>
          <Card.Text>
              precio: 6000Bs
          </Card.Text>

        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-AkH3bDnm-2RhTfr1K8texoNpk9KyNQVIA&usqp=CAU" />
        <Card.Body>
          <Card.Title>PS5 Slim</Card.Title>
          <Card.Text>
              precio: 7000Bs
          </Card.Text>

        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61Xtx4mXvvL._AC_UF1000,1000_QL80_.jpg" />
        <Card.Body>
          <Card.Title>XBOX series s</Card.Title>
          <Card.Text>
              precio: 5500Bs
          </Card.Text>

        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://www.tiendaamiga.com.bo/media/catalog/product/cache/deb88dadd509903c96aaa309d3e790dc/e/0/e06716.jpg" />
        <Card.Body>
          <Card.Title>Nintendo Switch</Card.Title>
          <Card.Text>
              precio: 3000Bs
          </Card.Text>

        </Card.Body>
      </Card> 

      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://gorilagames.com/img/PublicPublic/1019/producto-meta-quest-2-9-5627.jpg" />
        <Card.Body>
          <Card.Title>oculus quest 2</Card.Title>
          <Card.Text>
              precio: 3500Bs
          </Card.Text>

        </Card.Body>
      </Card> 
    </div>
  )
}
