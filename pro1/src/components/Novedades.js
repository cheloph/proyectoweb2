import React from 'react'
import ReactPlayer from 'react-player'

export default function Novedades() {
  const videoprueba='https://youtu.be/N8Zm___c4B8?si=EczhOB41LJ3aS0w4'
  return (
    <div>
      <div style={{alignItems: 'center'}}>
        <ReactPlayer style={{margin: '0px auto'}}
              url={videoprueba} //Nos sirve para llamar a la URL
              playing={false} //Nos sirve para reproducir automac¿ticamente o no un video al cargar la pagina
              volume={0.8}  //Es para poner el volumen por defecto en este caso al 50%
              controls      //Para que aparezcan los controles de pausa y volumen
              width='50%'
              height='400px'
        />
      </div>
      <div>
        <h1d>El juego mas esperado DRAGON BALL SPARKING ZERO</h1d>
        <p>Como sabras el juego mas esperado por los fans de dragon ball ya llega en octubre
           y se nos dio a conocer mucho respecto al juego, como las graficas, la jugabilidad.
        </p>
        <p>Visto todo esto la comunidad pregunto si el juego tendria modo pantalla dividida
           como lo tenia el anterior juego, por suerte se confirmo que si lo tendria pero con una desventaja
           ya que el modo pantalla dividida solo se podra jugar en un solo escenario y no en todos los que vismos 
           ya que el jeugo fue pensado mas para multijugador online.
        </p>
      </div>
    </div>
  )
}
