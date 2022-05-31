# money-manager-backend

Heroku endpoint : https://money-manager-backend-balaji.herokuapp.com


#create a new expense
POST - https://money-manager-backend-balaji.herokuapp.com/expense/create
{
    "title": "Milk",
    "amount": 40,
    "type": "Income",
    "expenseFor": "Personal",
    "createdAt": ""
}
  
#create a new category   
POST - https://money-manager-backend-balaji.herokuapp.com/category/create

{
    "name": "category1"
}
 
#get all expense 
GET https://money-manager-backend-balaji.herokuapp.com/expense/get

#delete a expense
DELETE https://money-manager-backend-balaji.herokuapp.com/expense/delete
{
    "expenseId": "6289258ecf016ac10ad007b4"
}

#signup a user
POST - https://money-manager-backend-balaji.herokuapp.com/user/signup

{
    "email" :"test@gmail.com",
    "password": "123456",
    "username": "test"
}

#login as user
POST - https://money-manager-backend-balaji.herokuapp.com/user/login
{
    "email" :"test@gmail.com",
    "password": "123456"
}
