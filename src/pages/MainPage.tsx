import { useEffect, useState } from "react"
import { useForecast } from "../api"
import {
  CurrentForecastComponent,
  HourlyForecastComponent,
  SearchComponent,
  WeekForecastComponent
} from "../components"
import { DropdownComponent } from "../components/common"
import styles from "./scss/styles.module.scss"

function MainPage() {
  const [keyword, setKeyword] = useState<string>("")

  const { currentForecastData, currentForecastRequest } = useForecast(
    keyword || "Manila"
  )

  useEffect(() => {
    if (!currentForecastData) {
      currentForecastRequest()
    }
  }, [currentForecastData])

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__content}>
        <div className={styles.hero}>
          <div className={styles.hero__header}>
            <SearchComponent
              value={keyword}
              onChangeValue={setKeyword}
              onClickSearch={currentForecastRequest}
            />
            <DropdownComponent
              value="Celsius"
              options={["Celsius", "Fahrenheit"]}
            />
          </div>
          <CurrentForecastComponent data={currentForecastData} />
          <HourlyForecastComponent />
        </div>
        <WeekForecastComponent />
      </div>
    </div>
  )
}

export default MainPage
