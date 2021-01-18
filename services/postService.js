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
    let post = data.posts.find(post => post._id === postId);
    return Promise.resolve(post);
}

function getPostsByUserId(userId) {
    userId = parseInt(userId)
    let posts = data.posts.filter(post => (post.by._id === userId))
    return Promise.resolve(posts);
}

function getUserById(userId) {
    userId = parseInt(userId)
    let user = data.users.find(user => user._id === userId);
    return Promise.resolve(user);
}

function getUserLogged() {
    let userLogged = data.userLogged;
    return Promise.resolve(userLogged);
}