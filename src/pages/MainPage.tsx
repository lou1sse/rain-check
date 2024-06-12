import {
  CurrentForecastComponent,
  HourlyForecastComponent,
  SearchComponent
} from "../components"
import styles from "./scss/styles.module.scss"

function MainPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPage__hero}>
        <SearchComponent />
        <CurrentForecastComponent />
        <HourlyForecastComponent />
      </div>
    </div>
  )
}

export default MainPage
