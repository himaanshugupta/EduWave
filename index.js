const express = require('express');
const jwt = require('jsonwebtoken');
const JWTKEY = 'diW#5ic&dj@_FE7$';
const PORT = 3000;
app.use(express.json());

app.post( '/user/signup', function(req, res){

});

app.post('/user/signin', function(req, res){

})

app.get('/courses', function(req, res){

})

app.get('/user/purchases', function(req, res){
    
})





app.listen(PORT, ()=>{
    console.log(`App started at PORT : ${PORT}`);
})