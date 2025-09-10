import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { newsApi } from '@/shared/api/news'

const rootReducer = combineReducers({
	[newsApi.reducerPath]: newsApi.reducer
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false
		}).concat(newsApi.middleware)
})
