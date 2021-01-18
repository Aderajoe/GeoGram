import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { PostView } from './pages/PostView.jsx'
import { ProfileView } from './pages/ViewProfile.jsx'

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export class App extends React.Component {

    render() {
        return (
            <Router>
                <section className="app">
                    <AppHeader />
                    <Switch>
                        {/* <Route path="/newPost" component={NewPost} /> */}
                        <Route path="/post/user/:userId" component={ProfileView} />
                        <Route path="/post/:postId" component={PostView} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </section>
            </Router>
        )
    }
}

