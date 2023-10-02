export const formatLocalDateTime = localDateTime => {
  const date = new Date(localDateTime)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour12: false
  }
  const formattedDate = date.toLocaleDateString('ko-KR', options)
  return formattedDate
}

export const formatHourMinute = localDateTime => {
  const date = new Date(localDateTime)
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }
  const formattedDate = date.toLocaleTimeString('ko-KR', options)
  return formattedDate
}
