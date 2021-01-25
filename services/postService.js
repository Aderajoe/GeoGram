import { data } from "../data.js"
import { storageService } from "./storage-service.js"


export const dataServices = {
    loadData,
    getPostById,
    getUserById,
    getPostsByUserId,
    getUserLogged,
    removePost
}

const KEY = 'data'
function loadData() {

    return _onDataLoad()
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

function removePost(id) {
    console.log(data.posts)
    let dataFromStorage = _onDataLoad()
    dataFromStorage.posts = dataFromStorage.posts.filter(post => (post._id != id))
    _saveDataToStorage(dataFromStorage)
}

function _onDataLoad() {
    let dataFromStorage = storageService.load(KEY)
    console.log('storage is ' + dataFromStorage)
    if (!dataFromStorage) {
        console.log('do not load from storage')
        return data
    }
    console.log(' load from storage')
    data = dataFromStorage
    return dataFromStorage
}


function _saveDataToStorage(dataFromStorage) {
    storageService.save(KEY, dataFromStorage)
    console.log('saved')
}