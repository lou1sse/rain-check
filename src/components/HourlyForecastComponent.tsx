import { map } from "lodash-es"
import { Swiper, SwiperSlide } from "swiper/react"
import styles from "./scss/styles.module.scss"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

const SAMPLE_DATA = [
  {
    time: "6:00 PM",
    temperature: "32°"
  },
  {
    time: "7:00 PM",
    temperature: "28°"
  },
  {
    time: "8:00 PM",
    temperature: "28°"
  },
  {
    time: "9:00 PM",
    temperature: "27°"
  },
  {
    time: "10:00 PM",
    temperature: "29°"
  },
  {
    time: "11:00 PM",
    temperature: "24°"
  }
]

export function HourlyForecastComponent() {
  return (
    <div className={styles.hourlyForecastComponent}>
      <p className={styles.hourlyForecastComponent__title}>
        Today&apos;s Forecast
      </p>
      <div className={styles.swiper}>
        <Swiper spaceBetween={50} slidesPerView={5}>
          {map(SAMPLE_DATA, (item, index) => (
            <SwiperSlide key={index}>
              <div className={styles.swiper__item}>
                <p className="text-sm">{item.time}</p>
                <p className="text-2xl font-semibold">
                  {item.temperature}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
