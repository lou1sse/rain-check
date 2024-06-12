import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import styles from "./scss/styles.module.scss"

export function SearchComponent() {
  return (
    <div className={styles.searchComponent}>
      <input type="text" placeholder="Search location" />
      <MagnifyingGlassIcon />
    </div>
  )
}
