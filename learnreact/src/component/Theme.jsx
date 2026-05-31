import {
  useSelector,
  useDispatch
} from "react-redux"

import {
  toggleTheme
} from "../features/theme/themeSlice"
import useToggle from '../hooks/useTheme'
const Theme = () => {

  const mode = useToggle()

  const dispatch = useDispatch()
  return (

    <div>

      <h1>{mode}</h1>

      <button
        onClick={() =>
          dispatch(toggleTheme())
        }
      >
        Toggle Theme
      </button>

    </div>

  )
}

export default Theme