import React from "react";
import Card from "./Card";

const cards = [
    {
        title: 'El golazo de Messi', 
        content: 'Despues de la derrota en la primera jornada contra Arabia, el conjunto de Lionel Scaloni se veia en la obligacion de ganar este partido ante un Mexico con un gran Guillermo Ochoa bajo palos y una gran actuacion del 10 de la Argentina.',
        image: 'https://img2.rtve.es/v/6745149?w=1600&preview=1669497586728.jpg',
        button: {
            text: 'Ver Resumen',
            target: 'https://www.youtube.com/watch?v=G4bf5qpkql0'
        }
    },
    {
        title: 'El homenaje a Riquelme', 
        content: 'En esta ocasión el conjunto albiceleste se confió demasiado ya que los de Van Gal empatarian el encuentro en el minuto 99 de partido. Uno de los encuentros con más polemica del cual destacamos el famoso "Que mirah Bobo". ',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/e721c43/2147483647/strip/true/crop/1605x903+0+84/resize/1200x675!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8b%2F07%2Fe91a86606630bfcdd256739e3b13%2Ff38865413d9d4b6293aefd50ba3d0eb1',
        button: {
            text: 'Ver Resumen',
            target: 'https://www.youtube.com/watch?v=6xI6dZEmR8k'
        }
    },
    {
        title: 'La carrera de Julian Alvarez', 
        content: 'Los de Scaloni se medirian con el subcampeon del 2018, Croacia estaba disputando uno de sus mejores mundiales en su historia pero no contaban con Julian Alvarez, un joven talento que con pocos minutos ha demostrado ser imprescindible.',
        image: 'https://img2.rtve.es/v/6756322/?w=1600',
        button: {
            text: 'Ver Resumen',
            target: 'https://www.youtube.com/watch?v=nmiuMXe98eU'
        }
    },
    {
        title: 'Un Mbappe descomunal', 
        content: 'La mejor final de la historia de los mundiales, con un Mbappe enchufadisimo anotando un Hack-Trick. Argentina se corona campeona del mundo por tercera vez en su historia y tiene mucho merito ante la francia de Kylian Mbappe.',
        image: 'https://images.daznservices.com/di/library/DAZN_News/3e/8e/argentina-francia-leo-messi-kylian-mbappe-mundial-2022_18i5r82aew7qs1saykfhmxp1rf.jpg?t=636286477',
        button: {
            text: 'Ver Resumen',
            target: 'https://www.youtube.com/watch?v=ek1lKpan96s'
        }
    }
]

const MyCards = () => {
    return (
        <div className="row text-center">
            {cards.map((card, index) => {
                return(<Card key={index} cardContent={card} />)
            })}
        </div>
    );
}

export default MyCards;