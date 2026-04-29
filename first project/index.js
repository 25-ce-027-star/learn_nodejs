const express= require('express')
const app = express()

app.listen(3000,()=>{
    console.log('succesfully connected to port 3000')
})
/*app.get('/' ,(req,res) => {
    res.send('hello')}
)
app.get('/about',(req,res)=>{
    res.send("<h1>welcome to about</h1>")
})
app.get('/about/user',(req,res)=>{
    res.send("<h1>welcome to user</h1>")
})
app.get('/user/:id',(req,res)=>{
    res.send(req.params)
})
app.get('/user/:userid/book/:bookid',(req,res)=>{
    res.send(req.params.userid)
})
app.get('/user/:userid-:bookid',(req,res)=>{
    res.send(req.params)
})
app.get('/search',(req,res)=>{
    res.send(req.query)
})
app.get('/search',(req,res)=>{
    const name=res.query.name 
        const age=res.query.age

    res.send('search result for name: ${name} , age: ${age}')
}} 
app.get('/',(req,res)=>{
    res.send({
        name :"yahubaba",
        age:25
    })
})

app.get('/',(req,res)=>{
    res.send({
        name :"yahubaba",
        age:25
    })
})
app.get('/',(req,res)=>{

    res.jsonp({name: 'yahubaba', age:24})
})
app.get('/about',(req,res)=>{

    res.redirect('/user')
})
app.get('/user',(req,res)=>{

    res.send('user page')
})*/
app.set('view engine','ejs')


 /*   res.rander('..')})


app.get('/user',(req,res)=>{

    res.rander('user')
})*/
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/about',(req,res) => {
if(res.accept('html')
){res.send("<h1> hello html</h1>")}

else if(res.accept('json')
){res.send(massage: 'hello json')
}
else if(res.accept('xml')
){res.send(<massage\>hello xml</massage>)}
else{
    req.send('content type not supported')
}



})