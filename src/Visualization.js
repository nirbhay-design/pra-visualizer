import React from 'react'
import './visual.css'

function Visualization({frames,refstr,alggo}) {
    return (
        <div className="visualization__algorithms">
            Frames are : {(frames.length >0)?frames:"nothing to show here"} <br/>
            refstr are : {(refstr.length > 0)?refstr:"nothing to show here"}<br/>
            algo is : {(alggo.length >0)?alggo:"nothing to show here"}<br/>
        </div>
    )
}

export default Visualization
