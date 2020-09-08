import { Server, ServerConfig } from '@builderbox/core'
import app from './bootstrap'
import config from './config'

const serverConfig: ServerConfig = {
    port: config.server.port,
    hostname: config.server.hostname,
}
const server = new Server(app, serverConfig)

void server.start()
