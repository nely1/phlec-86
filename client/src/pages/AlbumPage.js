import React from 'react'
import './AlbumPage.css'
export default function AlbumPage() {
  return (
    <>
        <div className='AlbumPageParameter'>
            <h2>Filter:</h2>
            <h2>Tags:</h2>
            <input className='AlbumPageSearch' placeholder='Search...'></input>
        </div>
        
      {/* This would be a good candidate for a component, and should probably
        * put them in a specific grid/flexbox so that they are more responsive. */}
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
