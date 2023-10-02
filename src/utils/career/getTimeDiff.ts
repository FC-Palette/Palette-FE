export const getTimeDiff = (serverDate: Date) => {
  const currentDate = new Date()
  const timeDifference: number = (currentDate as any) - (serverDate as any)

  const minutes = Math.floor(timeDifference / (1000 * 60))
  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (minutes < 60) {
    return `${minutes}분 전`
  } else if (hours < 24) {
    return `${hours}시간 전`
  } else if (days < 7) {
    return `${days}일 전`
  } else {
    const koreanDateOptions = { timeZone: 'Asia/Seoul' }
    const koreanDateFormatter = new Intl.DateTimeFormat(
      'ko-KR',
      koreanDateOptions
    )
    return `오늘 ${koreanDateFormatter.format(serverDate)}`
  }
}