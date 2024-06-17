import { map } from "lodash-es"
import { forwardRef } from "react"
import styles from "./scss/styles.module.scss"

const SAMPLE_DATA = [
  {
    day: "Today",
    weather: "Sunny",
    date: "6/16"
  },
  {
    day: "Monday",
    weather: "Windy",
    date: "6/17"
  },
  {
    day: "Tuesday",
    weather: "Rainy",
    date: "6/18"
  },
  {
    day: "Wednesday",
    weather: "Rainy",
    date: "6/19"
  },
  {
    day: "Thursday",
    weather: "Windy",
    date: "6/20"
  },
  {
    day: "Friday",
    weather: "Sunny",
    date: "6/21"
  },
  {
    day: "Saturday",
    weather: "Sunny",
    date: "6/22"
  },
  {
    day: "Sunday",
    weather: "Sunny",
    date: "6/23"
  }
]

const WeekForecastComponent = forwardRef<
  HTMLDivElement,
  Record<string, never>
>((_props, ref) => {
  return (
    <div ref={ref} className={styles.weekForecastComponent}>
      <div className={styles.weekForecastComponent__content}>
        <p className={styles.title}>This Week&apos;s Forecast</p>
        <div className={styles.listWrapper}>
          {map(SAMPLE_DATA, (item, index) => (
            <div key={index} className={styles.listWrapper__item}>
              <p>{item.day}</p>
              <p className="text-center">{item.weather}</p>
              <p className="text-right">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

export default WeekForecastComponent
