import { configureStore } from '@reduxjs/toolkit'
import  nameSlice  from './yourName.slice'
export default configureStore({
  reducer: {
    nameSlice
	}
})