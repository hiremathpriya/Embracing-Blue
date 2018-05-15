import React from 'react'
import { Link } from 'react-router-dom'

export default class Men extends React.Component {
    render () {
        return (
            <div className='section'>
                <figure className="image">
                    <img src ="images/groupofmen3.jpg"/>
                 </figure>

                <div className="has-text-centered">
                    <h3 className="subtitle is-size-3">One in eight Kiwi men will experience a depression severe enough to require clinical treatment. If left untreated, men are more likely to develop substance abuse problems while trying to "man up" and face it alone.</h3>
                    <h1 className="title is-size-1">
                        <span className="has-text-info">There is another way.</span> 
                    </h1>
                </div> 
                <div className="section">
                    {/* <p id='paras' className="is-size-3"><b>Men</b></p> */}
                    {/* <p id='paras' className="is-size-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                </div>
                <Link to='/'><button className='button has-background-info is-centered has-text-light'>Back</button></Link>

            </div>
        )
    }
}
