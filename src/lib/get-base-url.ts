export function getBaseUrl() {
  return (
    process.env.FRONTEND_URL || `http://localhost:${process.env.PORT ?? 3000}`
  )
}
