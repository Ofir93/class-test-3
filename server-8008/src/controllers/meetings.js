import meetingModel from '../models/meeting.js'

export const getMeetingsByGroup = async (id) => {
    const [meetings] = await meetingModel.getMeetingsByGroup(id)
    return meetings
}

export const save = async (data) => {
    try {
        const {groupId, timeStart, timeEnd, meetDesc, meetRoom} = data
        const meeting = new meetingModel(groupId, timeStart, timeEnd, meetDesc, meetRoom)
        const [ res ] = await meeting.save()
        return res.affectedRows ? res.insertId : null
    } catch (error) {
        console.log(error)
        return null
    }
}
