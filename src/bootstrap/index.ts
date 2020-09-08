/**
 * Create The Application
 *
 * We create an Builder Box Application.
 */
import { Application } from '@builderbox/core'
import middlewares from '../middleware'
import controllers from '../controller'

const app = new Application()

middlewares.forEach((middleware) => app.registerMiddleware(middleware))
controllers.forEach((resource) => app.registerResource(resource))

export default app
