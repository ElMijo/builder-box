import { Router, Request, Response } from 'express'
import { ResourceType } from '@builderbox/core'

const Hello = Router()

Hello.get('/:name?', (req: Request, res: Response) => {
    const name = req.params.name || 'stranger'
    return res.json({ message: `Hi ${name}!!` })
})

const HelloResource: ResourceType = ['/hello', Hello]

export default HelloResource
