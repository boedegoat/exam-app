import { StatusCodes } from 'http-status-codes'

import { ApiError } from './api'

export const validatePayload = (payload, schema) => {
    const result = schema.validate(payload)
    if (result.error) {
        throw new ApiError(result.error, StatusCodes.BAD_REQUEST)
    }
}

export const validateRole = (roles, user) => {
    if (!roles.includes(user.role)) {
        throw new ApiError(
            'You are not allowed to access this route',
            StatusCodes.FORBIDDEN
        )
    }
}
