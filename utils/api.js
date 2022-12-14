import nc from 'next-connect'
import { StatusCodes } from 'http-status-codes'

export class ApiError extends Error {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    }
}

export const sendResponse = (
    res,
    { statusCode = StatusCodes.OK, data = undefined, message = undefined }
) => {
    res.status(statusCode).json({
        statusCode,
        message,
        data,
    })
}

const handler = () =>
    nc({
        onError: (err, req, res, next) => {
            if (err instanceof ApiError) {
                return sendResponse(res, {
                    statusCode: err.statusCode,
                    message: err.message,
                })
            }

            console.error(err.stack)
            sendResponse(res, {
                statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
                message: 'Something broke',
            })
        },
        onNoMatch: (req, res) => {
            sendResponse(res, {
                statusCode: StatusCodes.NOT_FOUND,
                message: 'Page not found',
            })
        },
    })

export default handler
