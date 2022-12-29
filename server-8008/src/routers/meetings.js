import { Router } from 'express'
import { getMeetingsByGroup, save } from '../controllers/meetings.js'

const router = Router()

router.get('/:id', async (req, res) => {
    try {
      const meetings = await getMeetingsByGroup(req.params.id)
      meetings.length ? res.send(meetings) : res.sendStatus(404)
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  })
  
  router.post('/', async (req, res) => {
    try {
      const insertId = await save(req.body)
      insertId
        ? res.send(`Meeting ${insertId} inserted!`)
        : res.send('Nothing inserted')
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  })

  export default router