import { useCallback, useState } from "react"
import { useQuery } from "react-query"

const API = import.meta.env.VITE_API_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export function useCurrentForecastComponent() {
  const [keyword, setKeyword] = useState<string>("")

  const currentForecastRequest = useCallback(async () => {
    const response = await fetch(
      `${API}?q=${keyword}&units=metric&APP_ID=${API_KEY}`
    )

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    return response.json()
  }, [keyword])

  const { isLoading, data, error } = useQuery(
    "weather",
    currentForecastRequest
  )

  return {
    keyword,
    setKeyword,
    currentForecastRequest,
    isLoading,
    data,
    error
  }
}
