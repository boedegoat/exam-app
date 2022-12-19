import Joi from 'joi'
import jwt from 'jsonwebtoken'
import { setCookie } from 'cookies-next'

import handler, { sendResponse } from '@/utils/api'
import { validatePayload } from '@/utils/validator'
import db from '@/utils/db'
import { StatusCodes } from 'http-status-codes'

const postRegisterPayload = Joi.object({
    fullname: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
})

// This route is responsible for creating new school admin
const RegisterHandler = handler().post(async (req, res) => {
    validatePayload(req.body, postRegisterPayload)

    const newAdmin = await db.user.create({
        data: {
            ...req.body,
            role: 'ADMIN',
        },
    })

    const accessToken = jwt.sign({ id: newAdmin.id }, 'tempAccessSecret', {
        expiresIn: '30m',
    })
    const refreshToken = jwt.sign({ id: newAdmin.id }, 'tempRefreshSecret', {
        expiresIn: '30d',
    })

    setCookie('accessTokenLife', '', {
        req,
        res,
        path: '/',
        maxAge: 30 * 60, // 30 minutes in seconds
        sameSite: true,
        secure: process.env.NODE_ENV === 'production',
    })
    setCookie('refreshToken', refreshToken, {
        req,
        res,
        path: '/',
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
        sameSite: true,
        secure: process.env.NODE_ENV === 'production',
    })

    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        data: {
            user: newAdmin,
            accessToken,
        },
    })
})

export default RegisterHandler
