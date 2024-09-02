import { useState } from "react"

function MeetingCard(props) {
    let searchQuery = props.img
    let imageURL = `https://source.unsplash.com/1600x800/?${searchQuery}`
    console.log(searchQuery, imageURL)


    return (
        <div className="card">
            <img src={imageURL} className="card-img" />
            <div className="card-content">
                <div className="card-content-header">
                    <a href={props.link} className="card-link" target="_blank" rel="noreferrer">
                        <h2>{props.title}</h2>
                    </a>
                    <p>{props.date}</p>
                </div>
            </div>
        </div>
    )
}

export default MeetingCard