import React from 'react'
import Navbar from '../components/Navbar'
import './AlbumPage.css'
export default function AlbumPage() {
  return (
    <>
        
        <div className='AlbumPageParameter'>
            <h2>Filter:</h2>
            <h2>Tags:</h2>
            <input className='AlbumPageSearch' placeholder='Search...'></input>
        </div>
        <div className='AlbumPageGrid'>
            <div className='AlbumPageItems'>
                <div className='tmpBox'></div>
                <h3>PlaceName</h3>
                <p className='text3'>Date & Time + Number of Photos</p>
            </div>
            <div className='AlbumPageItems'>
                <div className='tmpBox'></div>
                <h3>PlaceName</h3>
                <p className='text3'>Date & Time + Number of Photos</p>
            </div>
            <div className='AlbumPageItems'>
                <div className='tmpBox'></div>
                <h3>PlaceName</h3>
                <p className='text3'>Date & Time + Number of Photos</p>
            </div>
            <div className='AlbumPageItems'>
                <div className='tmpBox'></div>
                <h3>PlaceName</h3>
                <p className='text3'>Date & Time + Number of Photos</p>
            </div>
        </div>

    </>
  )
}
