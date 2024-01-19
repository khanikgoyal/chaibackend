// console.log("chai aur code");
require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

const github={
    "login": "khanikgoyal",
    "id": 97383932,
    "node_id": "U_kgDOBc31_A",
    "avatar_url": "https://avatars.githubusercontent.com/u/97383932?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/khanikgoyal",
    "html_url": "https://github.com/khanikgoyal",
    "followers_url": "https://api.github.com/users/khanikgoyal/followers",
    "following_url": "https://api.github.com/users/khanikgoyal/following{/other_user}",
    "gists_url": "https://api.github.com/users/khanikgoyal/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/khanikgoyal/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/khanikgoyal/subscriptions",
    "organizations_url": "https://api.github.com/users/khanikgoyal/orgs",
    "repos_url": "https://api.github.com/users/khanikgoyal/repos",
    "events_url": "https://api.github.com/users/khanikgoyal/events{/privacy}",
    "received_events_url": "https://api.github.com/users/khanikgoyal/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-01-09T09:37:00Z",
    "updated_at": "2024-01-07T13:19:42Z"
  }

app.get('/github', (req,res)=>{
    res.json(github)
})  
app.get('/', (req,res)=>{
    res.send('hello world!')
})
app.get('/twitter', (req,res)=>{
    res.send('hello khanik!')
})
app.get('/login' ,(req, res)=>{
    res.send('loging')
})
app.get('/youtube',(req,res)=>{
    res.send('chai aur code')
})
app.listen(process.env.PORT, ()=>{
    console.log(`Example app listening on port ${port}`);
})
