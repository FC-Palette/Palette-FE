import { useCallback, useRef, useEffect } from 'react'

export const useOutsideClick = ({ onClickOutside }) => {
  const ref = useRef(null)

  const handleClick = useCallback(
    e => {
      const inside =
        ref.current && (ref.current as HTMLElement).contains(e.target)
      if (inside) return
      onClickOutside()
    },
    [onClickOutside, ref]
  )

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  }, [handleClick])

  return ref
}
