import styles from "./scss/styles.module.scss"

export function CurrentForecastComponent() {
  return (
    <div className={styles.currentForecastComponent}>
      <div className="flex justify-between w-full h-full">
        <div className="flex flex-col justify-between h-full">
          <p className="text-4xl font-medium">Manila</p>
          <p className="text-7xl font-semibold">31</p>
        </div>
        <p>Sunny</p>
      </div>
    </div>
  )
}
