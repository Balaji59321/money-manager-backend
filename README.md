# money-manager-backend

Heroku endpoint : https://money-manager-backend-balaji.herokuapp.com

POST - create an new expense
{
    "title": "Milk",
    "amount": 40,
    "type": "Income",
    "expenseFor": "Personal",
    "createdAt": ""
}
  
  
POST - http://localhost:3001/category/create

{
    "name": "category1"
}
 
GET http://localhost:3001/expense/get

DELETE http://localhost:3001/expense/delete

{
    "expenseId": "6289258ecf016ac10ad007b4"
}


POST -https://money-manager-backend-balaji.herokuapp.com/user/signup

{
    "email" :"test@gmail.com",
    "password": "123456",
    "username": "test"
}

POST - http://localhost:3001/user/login

{
    "email" :"test@gmail.com",
    "password": "123456"
}
