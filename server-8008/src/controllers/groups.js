import groupModel from '../models/groups.js'

export const getGroups = async (id) => {
    const [groups] = await groupModel.getGroups(id)
    return groups
}

