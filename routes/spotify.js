const router = require("express").Router();
import axios from ('axios')
import { Credentials } from './'



const spotifyApi = new SpotifyWebApi ({
    clientId : CLIENT_ID,
    clientSecret : CLIENT_SECRET
})

spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error));



spotifyApi.searchArtists('spotifyArtistName')
  .then(function(data) {
    console.log('Search artists by "spotifyArtistName"', data.body);
    //get the id
  }, function(err) {
    console.error(err);
  });


  spotifyApi.getArtistTopTracks('artist id', 'GB')
  .then(function(data) {
    console.log(data.body);
    //store first 3 preview url in an array 
    }, function(err) {
    console.log('Something went wrong!', err);
  });




  const _getToken = async () => {

        const result = await fetch("https://accounts.spotify.com/api/token", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(CLIENT_ID + ":" + CLIENT_SECRET)
            },
            body : 'grant_type=client_credentials'
        })

        var data = await result.json()
        console.log(data.access_token)
        
        return data.access_token
    }


    const _getArtistsId = async () => {

    }

