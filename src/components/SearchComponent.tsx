import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ChangeEvent } from "react"
import styles from "./scss/styles.module.scss"

type Props = {
  value: string,
  onChangeValue?: (text: string) => void,
  onClickSearch: () => void
}

export function SearchComponent(props: Props) {
  const { value, onChangeValue, onClickSearch } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: inputValue } = event.target
    if (onChangeValue) onChangeValue(inputValue)
  }

  return (
    <div className={styles.searchComponent}>
      <input
        type="text"
        value={value}
        placeholder="Search location"
        onChange={handleChange}
      />
      <button
        type="button"
        aria-label="Search Icon Button"
        onClick={onClickSearch}
      >
        <MagnifyingGlassIcon />
      </button>
    </div>
  )
}
