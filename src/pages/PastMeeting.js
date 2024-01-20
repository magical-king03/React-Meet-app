import { useState } from "react"
import MeetingCard from "../components/MeetingCard"

function PastMeeting() {
    let [meetings, setMeetings] = useState([])

    fetch('https://venom-meetings-default-rtdb.firebaseio.com/meet.json').then(
        response => response.json()).then(data => {
            let tempMeeting = []
            for (const key in data) {
                let meeting = {
                    id: key,
                    ...data[key],
                }
                tempMeeting.push(meeting)
            }
            setMeetings(tempMeeting)
        })

    return (
        <div className="upcoming-page">
            <h2>Past meeting</h2>

            <div className="meeting-card">
                {
                    meetings.filter((meeting) => {
                        let today = new Date()
                        let date = new Date(meeting.date)
                        return (date < today)
                    }).map((meeting) => {
                        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                        let date = new Date(meeting.date)
                        let fdate = date.toDateString('en', options)
                        return <MeetingCard title={meeting.title} img={meeting.img} link={meeting.link} date={fdate} bookmark={meeting.bookmarkStatus} />
                    })
                }
            </div>

        </div>
    )
}

export default PastMeeting