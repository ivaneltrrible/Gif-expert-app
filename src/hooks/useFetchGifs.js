import { useState, useEffect } from 'react'
import { getGifts } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {
    const [ state, setState ] = useState({
        images: [],
        loading: true,
    })
    
    
    useEffect(() => {
        getGifts( category ).
            then( imgs => {
                setTimeout( () => {
                    console.log(imgs);
                    setState({
                        images: imgs,
                        loading: false,
                    }) 
                }, 7000)
            })
    }, [ category ])
    

    return state;
}