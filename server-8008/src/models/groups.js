import db from '../../db.js'

export default class Group {
    // constructor(
    //     groupId,
    //     groupName
    // ) {
    //     this.groupId,
    //     this.groupName
    // }

    static async getGroups(id) {
        const query = `
        select * from development_groups ${id ? `where group_id = ${id}` : ''}
        `
    return db.execute(query)
    }
}