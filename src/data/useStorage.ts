import { useEffect, useState } from "react"

export function useStored<T>(key: string, initial: T[]) {
  const [data, setData] = useState<T[]>([])

  useEffect(() => {
    const raw = localStorage.getItem(key)
    if (raw) setData(JSON.parse(raw))
    else setData(initial)
  }, [key])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [key, data])

  return [data, setData] as const
}
