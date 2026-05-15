import {
  useSelector,
  useDispatch
} from "react-redux"

import {
  toggleTheme
} from "../features/theme/themeSlice"

const Theme = () => {

  const mode = useSelector(
    (state) => state.theme.mode
  )

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