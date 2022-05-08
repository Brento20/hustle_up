const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');

const {
    createUser,
    getSingleUser,
    login,
} = require('../../controllers/user-controller');



// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, createUser);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;
