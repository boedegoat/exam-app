import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

import db from '@/utils/db'
import { validatePayload, validateRole } from '@/utils/validator'
import handler, { sendResponse } from '@/utils/api'

const postTestPayload = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    startDate: Joi.date(),
    endDate: Joi.date(),
})

const TestHandler = handler()
    // create new test
    .post(async (req, res) => {
        validatePayload(req.body, postTestPayload)

        const tempAdminId = '6391b7d8cdc26a75b8193c1b'
        const tempTeacherId = '6391bbaef6c6688dfb56b82c'
        const tempStudentId = '6391bb5af6c6688dfb56b828'

        // only admin or teacher
        const user = await db.user.findUnique({ where: { id: tempStudentId } })
        validateRole(['ADMIN', 'TEACHER'], user)

        const newTest = await db.test.create({
            data: {
                userId: user.id,
                ...req.body,
            },
        })

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            data: {
                test: newTest,
            },
        })
    })

export default TestHandler
