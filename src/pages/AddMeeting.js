import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function AddMeetings() {
    let titleInput = useRef()
    let imgInput = useRef()
    let linkInput = useRef()
    let dateInput = useRef()
    let navigate = useNavigate()
    let [loadingStatus, setLoadingStatus] = useState(false)
    function addMeetingHandler() {
        setLoadingStatus(true)
        let tempMeeting = {
            title: titleInput.current.value,
            img: imgInput.current.value,
            link: linkInput.current.value,
            date: dateInput.current.value,
            bookmarkStatus: 'false',
        }
        fetch('https://venom-meetings-default-rtdb.firebaseio.com/meet.json', {
            method: 'post',
            body: JSON.stringify(tempMeeting)
        }).then(()=>{
            setLoadingStatus(false)
            navigate('/upcoming-meeting')
        })
    }
    return (
        <div className="add-page">
            <h1>Add your meeting</h1>
            <div className="input">
                <input type="text" ref={titleInput} placeholder="Enter the meeting title" />
                <input type="text" ref={imgInput} placeholder="Enter the meeting image" />
                <input type="text" ref={linkInput} placeholder="Enter your link" />
                <input type="datetime-local" ref={dateInput} placeholder="Enter the meeting date" />
                <button className='add-btn' onClick={addMeetingHandler}>Add meeting <div class={ loadingStatus == true ? "loader" : "" }></div></button>
            </div>

        </div>
    )
}

export default AddMeetings