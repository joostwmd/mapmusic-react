import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';



function ArtistCard(props) {
    
    // const API_URL = 'http://localhost:5005' 

     const CLIENT_ID = "dca951119d9442adaff3bb0c8ba9cf43"
     const CLIENT_SECRET = "0693cad954e1458fb57095a8328420ac"

    // const spotifyApi = new SpotifyWebApi ({
    //     clientId : CLIENT_ID,
    //     clientSecret : CLIENT_SECRET
    // })

    const [ token , setToken ] = useState("")
    const [ artistId, setArtistID] = useState("")

    useEffect(() => {
         
         axios('https://accounts.spotify.com/api/token', {
             headers: {
                 'Content-Type' : 'application/x-www-from-urlencoded',
                 'Authorization' : 'Basic' + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
             },
             data: 'grant_type=client_credentials',
             method: 'POST'
         })
         .then(tokenResponse => {
             setToken(tokenResponse.data.access_token)

        })

    }, [])

    function _getArtistsId(){
        axios(`https://api.spotify.com/v1/search?query=2LADE&type=artist`, {
             method: 'GET', 
             headers: { 'Authorization' : 'Bearer' + token }
          })
          .then(queryResponse => {
             console.log(queryResponse) 
             setArtistID(queryResponse.data)
          }

          )
    }

    function test () {
       _getArtistsId()
    }

  // ${artistSpotifyName}


    // spotify token 

    // const _getToken = async () => {

    //     const result = await fetch("https://accounts.spotify.com/api/token", {
    //         method : 'POST',
    //         headers : {
    //             'Content-Type' : 'application/x-www-form-urlencoded',
    //             'Authorization' : 'Basic ' + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    //         },
    //         body : 'grant_type=client_credentials'
    //     })

    //     var data = await result.json()
    //     console.log(data.access_token)
        
    //     return data.access_token
    // }

    // const token = _getToken()

    
      // Retrieve an access token
      
  
       
    

    //collabsilbe 

    

        const [checked, setChecked] = useState(false);
      
        const handleChange = () => {
          setChecked((prev) => !prev);
        };
    


   
        function test () {
            
        }


    return (
        <div>
            <button onClick={test}></button>
            
            <Box sx={{ height: 180 }}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="listen"
                />
                <Box sx={{ display: 'flex' }}>
                    <Fade in={checked}>
                    <audio controls>
                        <source src="https://p.scdn.co/mp3-preview/6be8eb12ff18ae09b7a6d38ff1e5327fd128a74e?cid=162b7dc01f3a4a2ca32ed3cec83d1e02"></source>
                    </audio>
                    </Fade>
                </Box>
            </Box>
        </div>
    )
}

export default ArtistCard
//<Fade in={checked}>{icon}</Fade>