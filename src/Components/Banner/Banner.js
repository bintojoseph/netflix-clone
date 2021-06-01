import React, {useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banner() {
    const [movie, setMovie] = useState()
    function getRandomInt(length) {
        return Math.floor(Math.random() * length);
    }
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            
            const randomNum = getRandomInt(20)
            console.log(response.data.results[randomNum])
            setMovie(response.data.results[randomNum])
        })
    }, [])
    return (
        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}
        className='banner'>
            <div className="content">
                <h1 className="title">{movie ? movie.title ? movie.title : movie.name : ''}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview:''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
