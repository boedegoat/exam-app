import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

import db from '@/utils/db'
import handler, { ApiError, sendResponse } from '@/utils/api'
import { validatePayload } from '@/utils/validator'

const postQuestionPayload = Joi.object({
    testId: Joi.string().required(),
    questionText: Joi.string().required(),
})

const QuestionHandler = handler()
    // create new question
    .post(async (req, res) => {
        validatePayload(req.body, postQuestionPayload)
        const { testId } = req.body

        const tempAdminId = '6391b7d8cdc26a75b8193c1b'
        const tempTeacherId = '6391bbaef6c6688dfb56b82c'
        const tempStudentId = '6391bb5af6c6688dfb56b828'

        // check if test is exist
        const test = await db.test.findUnique({ where: { id: testId } })
        if (!test) {
            throw new ApiError(
                `Test with testId ${testId} not found`,
                StatusCodes.NOT_FOUND
            )
        }

        // check if user created the test
        const user = await db.user.findUnique({ where: { id: tempTeacherId } })
        if (user.id !== test.userId) {
            throw new ApiError(
                "You can't access this test because you are not the owner",
                StatusCodes.FORBIDDEN
            )
        }

        await db.question.create({
            data: {
                ...req.body,
            },
        })

        sendResponse(res, {
            statusCode: StatusCodes.CREATED,
            message: 'New question created',
        })
    })

export default QuestionHandler
