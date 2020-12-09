import React from 'react'
import './UploadForm.css'

function UploadForm() {
    return (
        <>
        <div>
            <h1>Upload a 3D Object</h1>
            <div class="file-area">
                <input type="file"/>
                <div class="file-upload">
                    <span class="default">Click to select a file, or drag it here</span>
                </div>
            </div>
            <div className='uploaded_object'>
                <h1>Example Object (input not yet implemented)</h1>
                <video className='video' src='../.././videos/video2.mp4' autoPlay loop muted />
            </div>
        </div>
        </>
    )
}

export default UploadForm