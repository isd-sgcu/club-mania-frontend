import { LocalStorageKeys } from './types'

export const getFromLocal = (key: LocalStorageKeys) => {
  return localStorage.getItem(key)
}

export const setToLocal = (key: LocalStorageKeys, data: string) => {
  localStorage.setItem(key, data)
}

// generates new anonymous id
export const guid = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  // return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`
}

export const getAnonymousId = () => {
  // get from local storage if exist
  // else gen a new one
  const id = getFromLocal('anonymousId')
  if (id !== null) return id

  const newId = guid()
  setToLocal('anonymousId', newId)
  return newId
}
