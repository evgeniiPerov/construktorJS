//model applikaci

import image from './assets/image.jpg'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

const text = `lorep10`

export const model = [
    new TitleBlock( "Construktor web with Pure JS", {
        tag: 'h2',
        // styles: `background: linear-gradient(to right, #ff0099, #493240); color: #fff; text-align: center; padding: 1.5rem`
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock( image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
        width : '500px',
        height: 'auto'
        },
        alt: 'To je img'
    } ),
    new ColumnsBlock( [
        "App na cistem javascript",
        "Pouzival jsem principy OOP a SOLID",
        "JS - zajimavy jazyk :)"
    ], {
        styles: {
          background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
          color: '#fff',
          'font-weight': 'bold',
          padding: '2rem'
        }
    }),
    new TextBlock( text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
          }
      })
      
  ]
  