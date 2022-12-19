import Joi from 'joi'

import handler from '@/utils/api'

const postLoginPayload = Joi.object()

const LoginHandler = handler().post(async (req, res) => {})

export default LoginHandler
