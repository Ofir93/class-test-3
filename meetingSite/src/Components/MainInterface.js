import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MeetingCards from './MeetingCards'

function MainInterface() {
  const getGroups = () =>
    axios
      .get('http://localhost:8008/groups/')
      .then((response) => {
        setDbTeams(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })

  const [selects, setSelects] = useState('')
  const [dbTeams, setDbTeams] = useState([])
  const [desc, setDesc] = useState('')
  const [date, setDate] = useState('')
  const [startHour, setStartHour] = useState('')
  const [endHour, setEndHour] = useState('')
  const [room, setRoom] = useState('')

  const submit = () => {
    if(!selects || !date || !startHour || !endHour || !desc || !room){
        return
    }
    axios
      .post('http://localhost:8008/meetings', {
        groupId: selects,
        timeStart: `${date} ${startHour}`,
        timeEnd: `${date} ${endHour}`,
        meetDesc: desc,
        meetRoom: room,
      })
      .then(function (response) {
        console.log(response.data)
        setDesc('')
        setDate('')
        setStartHour('')
        setEndHour('')
        setRoom('')
        setSelects('')
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  useEffect(() => {
    getGroups()
    submit()
  }, [])

  return (
    <div>
      <div id="mainAdd" className="form-group">
        <select
        className="form-control mb-3"
          value={selects}
          onChange={(e) => {
            setSelects(e.target.value)
          }}
          required
        >
          {dbTeams.map((group) => {
            return (
              <option
                id={group.group_id}
                key={group.group_id}
                value={group.group_id}
              >
                {group.group_name}
              </option>
            )
          })}
        </select>
        <div id="input" className="form-group">
          <div id="dateTime">
            <input
            className="form-control"
              id="date"
              type="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            ></input>
            <label className="form-label">From</label>
            <input
            className="form-control"
              id="from"
              type="time"
              value={startHour}
              onChange={(e) => setStartHour(e.target.value)}
              required
            ></input>
            <label className="form-label">Until</label>
            <input
            className="form-control"
              id="until"
              value={endHour}
              onChange={(e) => setEndHour(e.target.value)}
              type="time"
              required
            ></input>
          </div>
          <div className="form-group">
            <label className="form-label">Meeting room : </label>
            <select
            className="form-control"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              placeholder="Meeting room"
              required
            >
              <option>Blue Room</option>
              <option>New York Room</option>
              <option>New York Room2</option>
              <option>Large Board Room</option>
            </select>
            <label className="form-label">Description</label>
            <input
            className="form-control"
              id="desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              type="text"
              required
            ></input>
          </div>
          <button
            id="button"
            className="btn btn-primary"
            onClick={(e) => {
              submit()
            }}
          >
            Submit new meeting
          </button>
        </div>
      </div>
      <div id="mettings">
        <MeetingCards teamId={selects ? selects : 1} />
      </div>
    </div>
  )
}

export default MainInterface
