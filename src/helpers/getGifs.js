

export const getGifts = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=15&api_key=Tnzff9uF2ewPuThQ92fEMTD0ibu5FRKU`
    const res =  await fetch( url );
    const { data } = await res.json();
    //console.log( data );

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(gifs);
    //console.log(encodeURI(category))
    return gifs;
}