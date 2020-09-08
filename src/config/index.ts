interface BuilderBoxConfiguration {
    SERVER_HOSTNAME: string
    SERVER_PORT: number
}

const defaultConfig: BuilderBoxConfiguration = {
    SERVER_HOSTNAME: 'localhost',
    SERVER_PORT: 5000,
}

const { SERVER_HOSTNAME, SERVER_PORT } = { ...defaultConfig, ...process.env }

export default {
    server: {
        hostname: SERVER_HOSTNAME,
        port: SERVER_PORT,
    },
    database: {},
}
