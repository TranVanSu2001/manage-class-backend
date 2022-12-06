const Redis = require("ioredis");

const redis = new Redis({
    port: 6379, // Redis port
    host: "127.0.0.1", // Redis host
});

const getUserFromCache = async (userName) => {
    const result = await redis.get(userName);
    return JSON.parse(result);
};

const saveUserToCache = async (userKey, userInfo) => {
    const result = await redis.set(userKey, userInfo);
    return result;
};

module.exports = {
    getUserFromCache,
    saveUserToCache
};