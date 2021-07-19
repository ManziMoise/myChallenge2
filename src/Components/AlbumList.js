import axios from 'axios'
import React, { useState, useEffect  } from 'react'
import { useParams} from 'react-dom'

function AlbumList () {

    const { albumId } = useParams()
    const url= `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`
    const [album, setAlbum] = useState(null)

    let content = null

    useEffect(() => {

        axios.get(url)
        .then(Response =>{
            setAlbum(Response.data)
        })

    }, [url])

    if(AlbumList){
       content =
            <div>
                <h1>{album.title}</h1>
                <div className="row">
                    <div className="col sm-6">
                    <img
                    src={album.thumbnailUrl[0].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[1].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[2].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[3].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[4].imageUrl}
                    alt={album.albumId}
                    />
                    </div>

                    <div className="col sm-6">
                    <img
                    src={album.thumbnailUrl[5].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[6].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[7].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[8].imageUrl}
                    alt={album.albumId}
                    />
                     <img
                    src={album.thumbnailUrl[9].imageUrl}
                    alt={album.albumId}
                    />
                    </div>
                   
                </div>
            </div>
        
    }

   

    return (
        <div>
            {content}
        </div>
    )
}

export default AlbumList
