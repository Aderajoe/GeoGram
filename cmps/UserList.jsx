import { UserPostPreview } from "../cmps/UserPostPreview.jsx"
import { UserPreview } from "../cmps/UserPreview.jsx"



const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;





export function UserList({ users }) {
    return (
        <section className="users-list-preview">
           {users.map(user => {
                if (!user) return <div>dont work</div>
                return <div key={user._id}> 
                    <UserPostPreview user={user} />

                </div>
            })}

            
        </section>
    )
}