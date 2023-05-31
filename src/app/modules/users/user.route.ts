import express, { Router } from 'express'
import { createUser } from './user.controller'

const router: Router = express.Router()

router.post('/create-user', createUser)

export default router
