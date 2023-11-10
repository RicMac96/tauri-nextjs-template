/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export function GET() {
  const os = require("os")
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const { username } = os.userInfo()
  return Response.json(username)
}
