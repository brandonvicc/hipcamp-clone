const router = require('express').Router();

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const asyncHandler = require('express-async-handler');


router.post(
    '/', 
    asyncHandler(async(req,res)=>{
        const { email, password, username} = req.body;
        const user = await User.signup({email, username, password});

        await setTokenCookie(res,user);

        return res.json({
            user
        })
    }))



module.exports = router;