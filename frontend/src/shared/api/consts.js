import { createEnum } from '../libs/helpers'

export const apiStatuses = createEnum({
  ok: 200,
  created: 201,
  noContent: 204,
  notFound: 404,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  unprocessableEntity: 422,
  internalServerError: 500,
})
