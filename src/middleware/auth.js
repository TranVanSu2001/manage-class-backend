const { RESPONSE_CODE } = require("../constant");
const { validateAuthToken, getUserByUserName } = require("../service/user");
const { getUserFromCache, saveUserToCache } = require("../service/cache");

const validateUser = async (req, res, next) => {
  const { accesstoken } = req.headers;
  let user;
  if (!accesstoken) {
    return user;
  }

  const decodedData = await validateAuthToken(accesstoken);
  if (decodedData) {
    const userName = decodedData?.user;
    const cachedUser = await getUserFromCache(userName);

    if (!cachedUser) {
      user = await getUserByUserName(decodedData?.user);

      console.log("user: ", user);

      if (user) {
        await saveUserToCache(user.username, JSON.stringify(user));
      }
    } else {
      user = cachedUser;
    }
  }

  if (!user) {
    res.send({
      code: RESPONSE_CODE.INVALID_TOKEN,
      message: "Can not authorize user",
    });
  } else {
    req.user = user;
    next();
  }
};

module.exports = { validateUser };
