// const data = require('./data.json');
import { data } from "../data.js"

export const dataServices = {
    loadData,
     getPostById,
     getUserById,
     getPostsByUserId,
     getUserLogged
}

function loadData() {
    return data


}

function getPostById(postId) {
    postId = parseInt(postId)
    const post = data.posts.find(post => post._id === postId);
    return Promise.resolve(post);
}
function getPostsByUserId(userId) {
    userId = parseInt(userId)
    const posts = data.posts.filter(post => (post.by._id === userId ))

    return Promise.resolve(posts);
}

// function checkIfPostLiked(userId) {
//     userId = parseInt(postId)
//     const post = data.posts.find(post => post._id === userId);
//     return Promise.resolve(post);
// }


function getUserById(userId) {
    
    userId = parseInt(userId)
    const user = data.users.find(user => user._id === userId);
    return Promise.resolve(user);
}


function getUserLogged() {
    
   
    const userLogged = data.userLogged;
    return Promise.resolve(userLogged);
}

// function checkIfPostLiked(userId) {
//     userId = parseInt(userId)
//     const user = data.users.find(user => user._id === userId);
//     const isLiked = user.find(user => user._id === userId);

//     return Promise.resolve(user);
// }
