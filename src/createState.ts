import uniqid from 'uniqid'

type Data = null | number | string | boolean | Data[]

interface State {
  key: string
  value?: Data
}

const createState = (initialValue: Data): [() => State, ((updatedValue: Data) => void)] => {
  const type = typeof initialValue

  const id: string = uniqid()

  const get = (): State => {
    if (document.getElementById(id) === null) {
      return {
        key: id,
        value: initialValue
      }
    } else {
      let typedValue: Data | undefined = document.getElementById(id)?.innerText
      switch (type) {
        case 'boolean':
          typedValue = typedValue === 'true'
          break
        case 'number':
          typedValue = Number(typedValue)
          break
        case 'object':
          if (typedValue === 'null') {
            typedValue = null
          }
          break
        case 'string':
          typedValue = String(typedValue)
          break
        default:
          break
      }
      return {
        key: id,
        value: typedValue
      }
    }
  }

  const set = (updatedValue: Data): void => {
    const element = document.getElementById(id)
    if (element === null) {
      throw new Error(`Element with id ${id} does not exist.`)
    } else {
      element.innerText = String(updatedValue)
    }
  }
  return [get, set]
}

export default createState
