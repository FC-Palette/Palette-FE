export const scrollToBottom = v => {
  if (v.current) {
    v.current.scrollTop = v.current.scrollHeight
  }
}
