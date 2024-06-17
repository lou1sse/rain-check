import { map } from "lodash-es"
import { CurrentForecastData } from "../api"
import styles from "./scss/styles.module.scss"

type Props = { data: CurrentForecastData | undefined }

export function CurrentForecastComponent(props: Props) {
  const { data } = props

  const renderWeather = () => map(data?.weather, "main").join(", ")

  return (
    <div className={styles.currentForecastComponent}>
      <div className="flex flex-col gap-y-12 justify-between h-full">
        <p className="text-4xl font-medium">{data?.name}</p>
        <p className="text-7xl font-semibold">{data?.main.temp}</p>
      </div>
      <p>{renderWeather()}</p>
    </div>
  )
}
