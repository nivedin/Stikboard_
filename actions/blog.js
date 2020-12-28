import fetch from 'isomorphic-fetch';
import {API} from '../config'
import queryString from 'query-string'
import {isAuth,handleResponse} from './auth'


export const createBlog = (blog,token) => {
    let createBlogEndpoint;

    if(isAuth() && isAuth().role === "admin"){
        createBlogEndpoint = `${API}/blog`
    }else if(isAuth() && isAuth().role !== "admin"){
        createBlogEndpoint = `${API}/user/blog`
    }
    return fetch(`${createBlogEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization:`Bearer ${token}`        
        },
        body: blog
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listBlogsWithCategoriesAndTags = (skip,limit) => {
    const data = {
        limit,skip
    }
    return fetch(`${API}/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleBlog = (slug) => {
    return fetch(`${API}/blog/${slug}`,{
        method:'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));

}

export const listRelated = (blog) => {
    return fetch(`${API}/blogs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(blog)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const list = (username) => {
    let listBlogsEndpoint;

    if(username){
        listBlogsEndpoint = `${API}/${username}/blogs`
    }else {
        listBlogsEndpoint = `${API}/blogs`
    }

    return fetch(`${listBlogsEndpoint}`,{
        method:'GET'
    })
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));

}

export const removeBlog = (slug,token) => {
    let deleteBlogEndpoint;

    if(isAuth() && isAuth().role === "admin"){
        deleteBlogEndpoint = `${API}/blog/${slug}`
    }else if(isAuth() && isAuth().role !== "admin"){
        deleteBlogEndpoint = `${API}/user/blog/${slug}`
    }
    return fetch(`${deleteBlogEndpoint}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`        
        },
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateBlog = (blog,token,slug) => {
    let updateBlogEndpoint;

    if(isAuth() && isAuth().role === "admin"){
        updateBlogEndpoint = `${API}/blog/${slug}`
    }else if(isAuth() && isAuth().role !== "admin"){
        updateBlogEndpoint = `${API}/user/blog/${slug}`
    }
    return fetch(`${updateBlogEndpoint}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization:`Bearer ${token}`        
        },
        body: blog
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const likeBlog = (userId,token,slug) => {
    //console.log("Req:",userId,token,slug)

    return fetch(`${API}/blog/like`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type":'application/json',
            Authorization:`Bearer ${token}`        
        },
        body: JSON.stringify({userId,slug})
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const unlikeBlog = (userId,token,slug) => {
    //console.log("Req:",userId,token,slug)

    return fetch(`${API}/blog/unlike`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`        
        },
        body: JSON.stringify({userId,slug})
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};
export const commentBlog = (userId,token,slug,comment) => {
    //console.log("Req:",userId,token,slug)

    return fetch(`${API}/blog/comment`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            "Content-Type":'application/json',
            Authorization:`Bearer ${token}`        
        },
        body: JSON.stringify({userId,slug,comment})
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};

export const uncommentBlog = (userId,token,slug,comment) => {
    //console.log("Req:",userId,token,slug)

    return fetch(`${API}/blog/uncomment`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`        
        },
        body: JSON.stringify({userId,slug,comment})
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
};


export const listSearch = (params) => {
    let query = queryString.stringify(params)
    return fetch(`${API}/blogs/search?${query}`,{
        method:'GET'
    })
    .then(response => {
       
        return response.json();
       
    })
    .catch(err => console.log(err));

}
