import GlobalDashboard from './GlobalDashboard';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/individual">
                    {/* Add dashboard component here */}
                    <div>Individual Dashboard</div>
                </Route>
                <Route path="/global">
                    <GlobalDashboard />
                </Route>
                <Route path="/">
                    <Link to="individual">Individual Dashboard</Link>
                    <br/>
                    <Link to="global">Global Dashboard</Link>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
