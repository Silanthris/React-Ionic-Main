import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../slices/counterSlice"
import idReducer from "../slices/idSlice"
import codeReducer from "../slices/codeSlice"
import menuchoiceReducer from '../slices/menuchoiceSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    id: idReducer,
    code: codeReducer,
    choice: menuchoiceReducer
  },
})