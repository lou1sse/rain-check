import { useQuery } from "react-query"
import { useState } from "react"
import { API } from "./service"
import { CurrentForecastData } from "./types"

export const useForecast = (keyword: string) => {
  const [coordinates, setCoordinates] =
    useState<CurrentForecastData["coord"]>()

  async function getCurrent() {
    try {
      const response = await API.get<CurrentForecastData>("weather", {
        q: keyword,
        units: "metric"
      })
      return response.data
    } catch (error) {
      throw new Error("Failed to fetch current forecast.")
    }
  }

  async function getHourly() {
    // try {
    //   const response = await API.get("onecall", {
    //     lat: coordinates?.lat,
    //     lon: coordinates?.lon,
    //     exclude: "current,minutely,daily,alerts",
    //     units: "metric"
    //   })
    //   return response.data
    // } catch (error) {
    //   throw new Error("Failed to fetch hourly forecast.")
    // }
  }

  const {
    isLoading: isCurrentForecastLoading,
    data: currentForecastData,
    refetch: currentForecastRequest
  } = useQuery("currentForecast", getCurrent, {
    onSuccess: (data) => {
      setCoordinates(data.coord)
    },
    enabled: false
  })

  const {
    isLoading: isHourlyForecastDataLoading,
    data: hourlyForecastData
  } = useQuery(["hourlyForecast", coordinates], getHourly, {
    enabled: !!coordinates
  })

  return {
    isLoading: isCurrentForecastLoading || isHourlyForecastDataLoading,
    currentForecastData,
    hourlyForecastData,
    currentForecastRequest
  }
}
