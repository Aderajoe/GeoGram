import { func } from "prop-types";

const { Link } = ReactRouterDOM;

const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

export function FollowedBy({ user }) {
    if (!user) return <div>dont work</div>

    function getSecondFollower(followers) {
        //         console.log(followers.length)
        // if(followers.length>1){
        //     return <div>followers</div>
        // }
        //         return <div>this works {followers[]}</div>
        if (followers.length > 1) {
            let follower = followers[1]
            return (<span ><Link className="bold link" to={`/post/user/${follower._id}`}>
                {follower.fullName} </Link></span>
            )
        }
    }
    function getFirstFollower(followers) {
        if (followers.length > 0) {
            let follower = followers[0]
            return (<span > <Link className="bold link" to={`/post/user/${follower._id}`}>
                {follower.fullName}</Link></span>
            )
        }
    }
    function getFollowersCount(followers) {
        if (followers.length > 2) {
            return (<span>+ {followers.length - 2} others</span>)
        }
    }


    if (!user) return <div>loading..</div>
    return (
        <div className="followers-preview" >
            {getFirstFollower(user.followedBy)}, {getSecondFollower(user.followedBy)}
            {getFollowersCount(user.followedBy)}

        </div>
    )








}

// return (<div className="followers-list" >
//             {user.followedBy.map(follower => {
//             if (!follower) return <div>dont work</div>
//             return <div key={follower._id}>
//                 {follower.fullName},              
//             </div>
//         })}
//     </div>
// )