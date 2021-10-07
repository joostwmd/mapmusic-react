import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import SpotifyWebApi from 'spotify-web-api-node'
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import FormControlLabel from '@mui/material/FormControlLabel';



function ArtistCard(props) {
    
    const API_URL = 'http://localhost:5005' 
    const CLIENT_ID = "dca951119d9442adaff3bb0c8ba9cf43"
    const CLIENT_SECRET = "0693cad954e1458fb57095a8328420ac"

    const spotifyApi = new SpotifyWebApi ({
        clientId : CLIENT_ID,
        clientSecret : CLIENT_SECRET
    })

    

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
      spotifyApi
        .clientCredentialsGrant()
        .then(data => spotifyApi.setAccessToken(data.body['access_token']))
        .catch(error => console.log('Something went wrong when retrieving an access token', error));

  
       
    

    //collabsilbe 

    

        const [checked, setChecked] = useState(false);
      
        const handleChange = () => {
          setChecked((prev) => !prev);
        };
    


   
        function test () {
            spotifyApi.searchArtists('Love')
            .then(function(data) {
              console.log('Search artists by "Love"', data.body);
            }, function(err) {
              console.error(err);
            });
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