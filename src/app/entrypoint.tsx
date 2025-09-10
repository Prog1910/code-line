import './styles'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Providers } from './providers'
import { AppRouter } from './router'

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Providers>
			<AppRouter />
		</Providers>
	</StrictMode>
)
