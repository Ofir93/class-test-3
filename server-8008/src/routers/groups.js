import { Router } from 'express'
import { getGroups } from '../controllers/groups.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
      const groups = await getGroups()
      groups.length ? res.send(groups) : res.sendStatus(404)
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  })
  
  
  export default router