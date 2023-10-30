export function Router_404 (req, res) {
  res.status(404).json({ error: `No existe esta ruta ${req.url}` })
}
