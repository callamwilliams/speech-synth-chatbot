console.log(`Running ${process.env.NODE_ENV} task`);

const nextConfiguration = {
    poweredByHeader: false,
    serverRuntimeConfig: {
        SECRET: process.env.SECRET || 'secret',
    },
    publicRuntimeConfig: {
        SITE: process.env.SITE,
        API_ENDPOINT: process.env.API_ENDPOINT,
    },
    env: {
        SITE: process.env.SITE,
        API_ENDPOINT: process.env.API_ENDPOINT,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        MAP_KEY: process.env.MAP_KEY,
    },
};

module.exports = nextConfiguration;
