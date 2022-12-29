import db from '../../db.js'

export default class Meeting {
    constructor(groupId, timeStart, timeEnd, meetDesc, meetRoom) {
    this.groupId = groupId,
    this.timeStart = timeStart,
    this.timeEnd = timeEnd,
    this.meetDesc = meetDesc,
    this.meetRoom = meetRoom
  }

  async save() {
    const query = `
        insert into meetings(group_id, time_start, time_end, meet_desc, meet_room)
        value (${this.groupId}, '${this.timeStart}', '${this.timeEnd}','${this.meetDesc}','${this.meetRoom}')
    `
    return db.execute(query)
    // return db.execute(query)
  }

  static async getMeetingsByGroup(id) {
    const query = `
        select * from meetings ${id ? `where group_id = ${id}` : ''}
        `
    return db.execute(query)
  }
}
