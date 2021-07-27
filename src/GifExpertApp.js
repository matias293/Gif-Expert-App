import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

  // const categorias = ['Romero','Ortigoza','Torrico']
  const [categorias, setCategorias] = useState(['Bart Simpsons'])

  // const handleAdd = () => {
  //     setCategorias([...categorias,'Beto Acosta'])
  // }

  return(
    <div>
          <h2>Gif Expert App</h2>

          <AddCategory setCategorias={setCategorias}/>
          <hr/> 


          <ol>
            {
              categorias.map( category =>(
                <GifGrid 
                   key={category}
                   category = {category}/>
              ) )
            }
          </ol>
    </div>
  )
}

