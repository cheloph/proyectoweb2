import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Juegos() {
  return (
    <div className='bodyMenu'>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/5/5b/Mortal_Kombat_1_key_art.jpeg" />
        <Card.Body>
          <Card.Title>Mortal combat 1</Card.Title>
          <Card.Text>
              precio: 245Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/agecheck/app/1971870/'>comprar aqui</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://pics.filmaffinity.com/biohazard_re_4-559091650-mmed.jpg" />
        <Card.Body>
          <Card.Title>Resident evil 4 remake</Card.Title>
          <Card.Text>
              precio: 210Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/2050650/Resident_Evil_4/'>comprar aqui</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://cdn.cdkeys.com/700x700/media/catalog/product/c/o/co2228_5_.jpg" />
        <Card.Body>
          <Card.Title>subnautica</Card.Title>
          <Card.Text>
              precio: 105Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/264710/Subnautica/'>comprar aqui</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://www.metacritic.com/a/img/catalog/provider/6/12/6-1-875875-52.jpg" />
        <Card.Body>
          <Card.Title>Spider man Remastered</Card.Title>
          <Card.Text>
              precio: 420Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/'>comprar aqui</Button>
        </Card.Body>
      </Card>  
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/PRfYtTZQsuj3ALrBXGL8MjAH.jpg" />
        <Card.Body>
          <Card.Title>Spider man miles morales</Card.Title>
          <Card.Text>
              precio: 350Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/1817190/Marvels_SpiderMan_Miles_Morales/'>comprar aqui</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://m.media-amazon.com/images/M/MV5BZjc2NmExYWEtMTllNi00NTc5LTliZDgtMWRmMjQzMjg1NDJmXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg" />
        <Card.Body>
          <Card.Title>God of war 4</Card.Title>
          <Card.Text>
              precio: 350Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/1593500/God_of_War/'>comprar aqui</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png" />
        <Card.Body>
          <Card.Title>God of war ragnarok</Card.Title>
          <Card.Text>
              precio: 350Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/2322010/God_of_War_Ragnark/'>comprar aqui</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg" />
        <Card.Body>
          <Card.Title>Red Dead Redemption 2</Card.Title>
          <Card.Text>
              precio: 420Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/'>comprar aqui</Button>
        </Card.Body>
      </Card> 
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://p325k7wa.twic.pics/high/dragon-ball/dragonball-fighters-z/05-dlc/DBFZ_FighterzPass3.jpg?twic=v1/resize=760/step=10/quality=80" />
        <Card.Body>
          <Card.Title>Dragon ball fightersz</Card.Title>
          <Card.Text>
              precio: 336Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/678950/DRAGON_BALL_FighterZ/'>comprar aqui</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/02/dragon-ball-z-kakarot-portada-ficha-1875947.jpg?tf=1200x" />
        <Card.Body>
          <Card.Title>Dragon ball kakarot</Card.Title>
          <Card.Text>
              precio: 336Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/851850/DRAGON_BALL_Z_KAKAROT/'>comprar aqui</Button>
        </Card.Body>
      </Card>    
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnerKqsZg6m0pA7B11PAEaP_1XTleUWL0Gy1BZfWQsxBIqqqV-xbjpwWNMd2VuELDQdVg&usqp=CAU" />
        <Card.Body>
          <Card.Title>Prototype 2</Card.Title>
          <Card.Text>
              precio: 280Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/115320/Prototype_2/'>comprar aqui</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', background: 'black', color:'white', margin:'10px 10px' }}>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg" />
        <Card.Body>
          <Card.Title>Forza horizon 5</Card.Title>
          <Card.Text>
              precio: 119Bs
          </Card.Text>
          <Button variant="primary" as={Link} to='https://store.steampowered.com/app/1551360/Forza_Horizon_5/'>comprar aqui</Button>
        </Card.Body>
      </Card>             
    </div>
  )
}
