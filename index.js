require('dotenv').config()
const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 3000
app.use(cors())
const users=[
  {
    "id": 1,
    "name": "Amit Sharma",
    "email": "amit.sharma@example.com",
    "age": 28,
    "city": "Mumbai"
  },
  {
    "id": 2,
    "name": "Priya Verma",
    "email": "priya.verma@example.com",
    "age": 25,
    "city": "Delhi"
  },
  {
    "id": 3,
    "name": "Rahul Mehta",
    "email": "rahul.mehta@example.com",
    "age": 30,
    "city": "Bangalore"
  },
  {
    "id": 4,
    "name": "Sneha Patil",
    "email": "sneha.patil@example.com",
    "age": 27,
    "city": "Pune"
  },
  {
    "id": 5,
    "name": "Vikram Joshi",
    "email": "vikram.joshi@example.com",
    "age": 35,
    "city": "Hyderabad"
  },
  {
    "id": 6,
    "name": "Anjali Nair",
    "email": "anjali.nair@example.com",
    "age": 29,
    "city": "Chennai"
  },
  {
    "id": 7,
    "name": "Ramesh Iyer",
    "email": "ramesh.iyer@example.com",
    "age": 31,
    "city": "Kolkata"
  },
  {
    "id": 8,
    "name": "Kavita Das",
    "email": "kavita.das@example.com",
    "age": 26,
    "city": "Jaipur"
  },
  {
    "id": 9,
    "name": "Saurabh Singh",
    "email": "saurabh.singh@example.com",
    "age": 33,
    "city": "Ahmedabad"
  },
  {
    "id": 10,
    "name": "Meera Kapoor",
    "email": "meera.kapoor@example.com",
    "age": 24,
    "city": "Lucknow"
  },
  {
    "id": 11,
    "name": "Tarun Sinha",
    "email": "tarun.sinha@example.com",
    "age": 32,
    "city": "Indore"
  },
  {
    "id": 12,
    "name": "Pooja Malhotra",
    "email": "pooja.malhotra@example.com",
    "age": 29,
    "city": "Bhopal"
  },
  {
    "id": 13,
    "name": "Nitin Rao",
    "email": "nitin.rao@example.com",
    "age": 27,
    "city": "Visakhapatnam"
  },
  {
    "id": 14,
    "name": "Ritika Saxena",
    "email": "ritika.saxena@example.com",
    "age": 30,
    "city": "Chandigarh"
  },
  {
    "id": 15,
    "name": "Arjun Desai",
    "email": "arjun.desai@example.com",
    "age": 28,
    "city": "Nagpur"
  },
  {
    "id": 16,
    "name": "Swati Bansal",
    "email": "swati.bansal@example.com",
    "age": 26,
    "city": "Thane"
  },
  {
    "id": 17,
    "name": "Kunal Choudhary",
    "email": "kunal.choudhary@example.com",
    "age": 31,
    "city": "Surat"
  },
  {
    "id": 18,
    "name": "Neha Reddy",
    "email": "neha.reddy@example.com",
    "age": 29,
    "city": "Vadodara"
  },
  {
    "id": 19,
    "name": "Manoj Pillai",
    "email": "manoj.pillai@example.com",
    "age": 34,
    "city": "Coimbatore"
  },
  {
    "id": 20,
    "name": "Radhika Gupta",
    "email": "radhika.gupta@example.com",
    "age": 25,
    "city": "Mysore"
  }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/user', (req, res) => {
  res.send('Hello user!')
})

app.get('/user/:user', (req, res) => {
  const user = req.params.user
  res.send(`Hello ${user}!`)
})
app.get('/admin/:user', (req, res) => {
  const user = req.params.user
  res.send(`Hello ${user}!`)
})
app.get('/getusers', (req, res) => {
  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})