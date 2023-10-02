import React from 'react'
import './style.css'

export const FormSection = (props) => {

    return (
        <>

            <div className='section-view'>
                <div className='vertical-line'>
                    <div className='section-heading'>
                        <strong>{props.headline}</strong>
                    </div>
                </div>

            </div>

        </>
    )
}