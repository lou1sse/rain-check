import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition
} from "@headlessui/react"
import { find, isObject, map } from "lodash-es"
import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react"
import styles from "./scss/styles.module.scss"

type OptionItem = string | Record<string, string | number>

type Props<T extends OptionItem> = PropsWithChildren<{
  options?: T[],
  optionLabelKey?: T extends string ? never : keyof T,
  optionIdKey?: T extends string ? never : keyof T,
  label?: string,
  placeholder?: string,
  value?: T,
  returnObject?: boolean,
  returnKey?: keyof T,
  customMenuButton?: JSX.Element,
  onChangeValue?: (value: T) => void
}>

export function DropdownComponent<T extends OptionItem>(props: Props<T>) {
  const {
    children,
    options,
    optionLabelKey = "label",
    optionIdKey = "id",
    label,
    placeholder,
    value,
    returnKey = optionIdKey,
    returnObject,
    customMenuButton,
    onChangeValue
  } = props

  const [selectedOption, setSelectedOption] = useState<T>()

  const valueDisplay = useMemo(() => {
    if (selectedOption && isObject(selectedOption)) {
      const key = optionLabelKey as keyof T
      return selectedOption[key] !== undefined ? selectedOption[key] : ""
    }
    return selectedOption as string
  }, [selectedOption, optionLabelKey])

  const findValue = useCallback(
    (item: T) => {
      if (!options) return

      const finalValue = find(options, (option) => {
        if (isObject(option) && isObject(item)) {
          const idKey = optionIdKey as keyof T
          const returnIdKey = returnKey as keyof T
          return option[idKey] === item[returnIdKey]
        }
        return option === item
      })

      setSelectedOption(finalValue)
    },
    [options, optionIdKey, returnKey]
  )

  const handleChange = (item: T) => {
    setSelectedOption(item)

    const itemValue = isObject(item)
      ? returnObject
        ? item
        : item[optionIdKey as keyof T]
      : item

    if (onChangeValue) onChangeValue(itemValue as T)
  }

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    item: T
  ) => {
    if (event.key === "Enter" || event.key === "") {
      event.preventDefault()
      handleChange(item)
    }
  }

  useEffect(() => {
    if (value) {
      findValue(value)
    }
  }, [value, findValue])

  return (
    <div className={styles.dropdownComponent}>
      {label && <p>{label}</p>}

      <Menu as="div" className="relative">
        <MenuButton as="div" className="relative">
          {customMenuButton ?? (
            <div className={styles.menuButton}>
              {placeholder ?? valueDisplay}
            </div>
          )}
        </MenuButton>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <MenuItems className={styles.menuItems}>
            {options
              ? map(options, (item, index) => (
                  <MenuItem key={index}>
                    <div
                      className={styles.menuItems__item}
                      role="button"
                      tabIndex={0}
                      onClick={() => handleChange(item)}
                      onKeyDown={(e) => onKeyDown(e, item)}
                    >
                      <p>
                        {isObject(item)
                          ? item[optionLabelKey as keyof T]
                          : item}
                      </p>
                    </div>
                  </MenuItem>
                ))
              : children}
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  )
}
