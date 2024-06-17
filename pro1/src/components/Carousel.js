import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://educahistoria.com/wp-content/uploads/2023/07/damarkuswolf_history_of_videogames_retro_design_cinematographic_fe98c9d8-cb79-49e0-9cd3-c453f44bd755-1080x675.png" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'white' ,fontSize:'400%'}}>TENEMOS LOS VIDEOJUEGOS QUE BUSCAS</h5>
        <p style={{color:'white' ,fontSize:'300%'}}>Sabemos que encontraras lo que estas buscando.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://i.blogs.es/40e1e6/aevi-2023/1366_2000.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'white' ,fontSize:'400%'}}>CONSOLAS DE ULTIMA GENERACION</h5>
        <p style={{color:'white' ,fontSize:'300%'}}>Asi como tambien todos sus accesorios.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://static.bandainamcoent.eu/high/dragon-ball/dragon-ball-sparking-zero/01-news/dbsz-announcement-thumbnail.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'yellow' ,fontSize:'400%'}}>ENTERATE DE LAS TENDENCIAS</h5>
        <p style={{color:'red' ,fontSize:'300%'}}>Ya viste el nuevo trailer del juego mas esperado de dragon ball.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
