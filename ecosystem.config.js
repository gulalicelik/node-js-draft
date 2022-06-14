module.exports = {
    apps: [
        {
            name  : "node-js-draft",
            script: "./bin/www",
            watch : true,

            env_test      : {
                name         : "node-js-draftp-test",
                NODE_ENV     : "test",
                LOG_PATH     : "logs/log.log",
                PORT         : 8080,
            },
            env_production: {
                name         : "node-js-draft-prod",
                NODE_ENV     : "production",
                LOG_PATH     : "logs/log.log",
                PORT         : 8081,
            }
        }
    ]
};
