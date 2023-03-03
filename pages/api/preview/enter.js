import { isUserAuthorized } from '@tinacms/auth'

const handler = async (req, res) => {
  if (process.env.NODE_ENV === 'development') {
    res.setPreviewData({})
    return res.redirect(req.query.slug)
  }

  const isAuthorizedRes = await isUserAuthorized({
    token: `Bearer ${req.query.token}`,
    clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  })

  if (isAuthorizedRes) {
    res.setPreviewData({})
    return res.redirect(req.query.slug)
  }

  return res.status(401).json({ message: 'Invalid token' })
}

export default handler