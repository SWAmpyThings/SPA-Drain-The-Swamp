import GlobalDashboard from './GlobalDashboard';
import IndividualDashboard from './IndividualDashboard/index';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/individual">
                    <IndividualDashboard />
                </Route>
                <Route path="/">
                    <GlobalDashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
