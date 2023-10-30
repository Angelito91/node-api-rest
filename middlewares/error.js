export function ErrorMiddleware (error, req, res, next) {
  if (error.message === 'NOT DATA') {
    res.status(404).json({ error: error.issues.map(issue => issue.message) })
  } else {
    res.status(500).json({ error: 'Hubo un error en el servidor' })
  }
}
