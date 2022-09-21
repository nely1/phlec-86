import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './AlbumPage.css'

export default function AlbumPage({loginState}) {
    const history = useNavigate();

    useEffect(() => {
        if (!loginState) {
          history("/Login");
        } 
      }, [history, loginState]);


    if (!loginState) {
        return (<></>);
    }  
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
