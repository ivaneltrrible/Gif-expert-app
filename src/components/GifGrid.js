import React  from 'react'

import { GifGridItem } from './GifGridItem';

import { useFetchGifs } from "../hooks/useFetchGifs"

import 'animate.css';

export const GifGrid = ({ category }) => {

    /* const [ images, setImages ] = useState([]);

    useEffect(() => {
        getGifts( category ).
            then( setImages )
    }, [ category ]) */

    const { images, loading } = useFetchGifs( category );
    //console.log(loading);       
    
    return (
        <>
            <h3> { category } </h3>

            { loading ? <p className="animate_animated animate__bounce animate__delay-5s">Cargando..</p> : null}
            
            <div className='card-grid animate__animated animate__bounceInDown'>
                { 
                    images.map( img => 
                        <GifGridItem 
                            key= { img.id }
                            { ...img }
                        />    
                    ) 
                }
            </div> 
        </>
    )
}
