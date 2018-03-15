const  express=require('express');
const app=express();
const graphqlHTTP=require('express-graphql');


app.use('/graphqldata',graphqlHTTP({

}));
app.listen(4000,()=>{
console.log('4000 port Start.....')
});