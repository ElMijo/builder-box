import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'

const middlewares = [cors(), json(), urlencoded({ extended: true }), helmet()]

const customMiddlewares = [
    // add your middlewares...
]

export default [...middlewares, ...customMiddlewares]
