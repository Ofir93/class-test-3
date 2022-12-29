import { createPool } from 'mysql2'

export default createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'meeting_management'
}).promise()