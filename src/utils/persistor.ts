import { InitialStateType } from "state/reducers/Reducer";

export function Persistor<State = InitialStateType>(key: string) {
    const store = localStorage
    const set = (value: State): State => {
      store.setItem(key, JSON.stringify(value))
      return value
    };
    const get = (): State | null => {
      const value = store.getItem(key)
      if (value) {
        return JSON.parse(value) as State
      } else {
        return null
      }
    };
    return {
      set,
      get,
    }
  }
  