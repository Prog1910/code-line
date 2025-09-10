import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import { HomePage } from '@/pages/home'

import { MainLayout } from './layouts/main-layout'

export const AppRouter = () => {
	const routes = createRoutesFromElements(
		<Route
			path='/'
			element={<MainLayout />}>
			<Route
				index
				element={<HomePage />}
			/>
		</Route>
	)

	return <RouterProvider router={createBrowserRouter(routes)} />
}
