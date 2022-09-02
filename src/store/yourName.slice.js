import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const yourNameSlice = createSlice({
		name: 'nameSlice',
    initialState: 0,
    reducers: {
      // Recibimos la accion por parámetros
      setNameSlice: (state, action) => action.payload
      // Colocamos la propiedad payload
    }
})

export const { setNameSlice } = yourNameSlice.actions;

export default yourNameSlice.reducer;