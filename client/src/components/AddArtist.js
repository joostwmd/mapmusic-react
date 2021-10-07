import React from 'react'
import { useState } from 'react'

function AddArtist(props) {
 
    const [artistName, setArtistName] = useState("")
    const [spotfiyName, setSpotifyName] = useState("")

    const lineUp = []

    const handleSubmit = (e) => {
        e.preventDefault()
    
        props.setAddedArtistName(artistName)
        props.setAddedSpotifyName(spotfiyName)
        props.setLineUp(lineUp)

        .then(
            lineUp.push({artistName : artistName, spotfiyName : spotfiyName}),
            setArtistName(""),
            setSpotifyName("")
        )
        .catch(err => (console.log(err)))
    }

    return (
        
        <div>

           <form onSubmit={handleSubmit}>
           <label htmlFor="artistName">name of event</label>
				<input
					type="text"
					name="name"
					value={artistName}
					onChange={e => setArtistName(e.target.value)}
				/>

                <label htmlFor="spotfiyName">name of event</label>
				<input
					type="text"
					name="name"
					value={spotfiyName}
					onChange={e => setSpotifyName(e.target.value)}
				/>

                <button>add artist</button>
           </form>
        </div>
    )
}

export default AddArtist
