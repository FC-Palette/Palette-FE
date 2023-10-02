export const decoder = () => {
  const token = localStorage.getItem('token') || ''
  if (!token) {
    return
  }
  const tokenPayload = token?.split('.')[1]
  const decoded = JSON.parse(atob(tokenPayload))
  return decoded
}
