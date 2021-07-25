import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Header from './components/Header/Header'
import routes from './routes'
import { GlobalProvider } from './components/GlobalContext'
import './App.css'

const App = () => {
    return (

        <GlobalProvider>
            <Router>
                <Header/>
                <main>
                    <Switch>
                        {routes.map(({ path, Component }, key) =>
                            <Route exact path={path} key={key}>
                                <Component/>
                            </Route>
                        )}
                    </Switch>
                </main>
            </Router>
        </GlobalProvider>
    )
}

export default App
