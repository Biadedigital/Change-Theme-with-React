import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeContextProvider} from "./themeContext"

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		 <ThemeContextProvider value={"dark"}>
        <App />
    </ThemeContextProvider>, 
	</React.StrictMode>
)

