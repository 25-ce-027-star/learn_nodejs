const express = require('express')
const app=express()
app.set('view engine','ejs')
app.set('views')
app.listen(3000,()=>{
    console.log("server started successfully on port 3000")
}) 
app.get('/',(req,res)=>{
res.send('<h1> welcome to html</h1>')
})
app.get('/about',(req,res)=>{
    res.send('home page')
app.use(express.urlencoded({ extended: false }))

})
app.get('/about',(req,res)=>{
    res.about('about',{title:'about page',massage:'welcome to ejs'})

})
app.use(express.static('public'))
app.get('/form',(req,res)=>{
    res.rander('form'.{massage:massage})})
    app.post( '/submit'=>(req,res){
const name= req.body.myname
const massage='hello',${name} you submitted the form.
res.rander('form',{massage:massage} )
})
