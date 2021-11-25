import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp =  () => {
    
    //const categories = ['One punch', 'Dragon Ball', 'Samurai X']
    const [categories, setCategories] = useState(['One punch man', 'Dragon Ball', 'Sam']);

    /*  const handleAdd = () => {
        const textoAgregar = document.querySelector('input').value
        setCategories([...categories, textoAgregar])
        document.querySelector('input').value = '';
    } */

    return( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            
            <ol>
                { 
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                )}
            </ol>
        </>    
    )
}
