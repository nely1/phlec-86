import React, { useState } from 'react'
import Tag from '../components/Tag';
import './RecordPage.css'
export default function RecordPage() {
    const [mainImage] = useState(() => { return 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'});
  return (
    <>
        <div className='RecordPageGrid'>
            <div>
                <h1 className='RecordPageTitle'>Save Your Favourite Moments</h1>
                <img className='RecordPageMainPicture' src={mainImage} alt='RecordPageImage'></img>
                <div className='RecordPageAddPhoto'>
                    <p className='text3'>Add photo +</p>
                </div>
            </div>
            <div>
                <h3 className='RecordPageAlbumNameTitle'>Album name</h3>
                <input className='RecordPageAlbumNameInput'type="text" placeholder=' Name...'></input>
                <h3 className='RecordPageDescription'>Description</h3>
                <textarea className='RecordPageDescriptionInput' placeholder=' Type Your Description Here'></textarea>
                <h3 className='RecordPageTagTitle'>Tags</h3>
                <Tag></Tag>
                <div className='RecordPageSave'>
                    <p className='text2'>Save</p>
                </div>
            </div>
        </div>
    </>
  )
}
