import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MeetingCards(props) {
    
    const getMeetings = () => axios.get(`http://localhost:8008/meetings/${props.teamId}/`)
    .then((res) => {console.log(res)
        setMeetingsByGroups(res.data)})
    .catch(function (error) {
        console.log(error)
    })

    const [meetingsByGroups, setMeetingsByGroups] = useState([])

    useEffect(()=>{
        getMeetings()
    }, [props.teamId])
  
    return (
    <div>
        <div className="card-container container">
        {meetingsByGroups.map((meeting, key) => {
            const [date, time] = meeting.time_start.split('T')
            const [dateNo, endTime] = meeting.time_end.split('T')
            return (
                <div className="card" key={key}>
                    <div className="card-body">
                    <h3 className="card-title">Room: {meeting.meet_room}</h3>
                    <p className='card-text'>Date: {date}</p>
                    <p className='card-text'>Start: {time.replace(/^Z+/, '').replace(/Z+$/, '')}</p>
                    <p className='card-text'>End: {endTime.replace(/^Z+/, '').replace(/Z+$/, '')}</p>
                    <p className='card-text'>Description: {meeting.meet_desc}</p>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default MeetingCards

