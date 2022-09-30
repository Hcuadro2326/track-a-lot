const mysql = require('mysql2/promise');
const db = require('./db/connection');
const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Question prompted when starting application.
const requiredQuestions = {
  viewDept: "Do you want to see a list by Department?",
  viewRole: "Do you want to see a list by Role?",
  viewEmployees: "Do you want to see a list of Employees?",
  addDept: "Do you wish to add a Department?",
  addRole: "Do you wish to add a Role?",
  upDate: "Do you wish to update an Employees Role?"
};


function prompt() {
  inquirer.prompt({
           name: 'start',
           type: 'list',
           message: 'Hello, and welcome to your employee tracker:',
           choices: [
              promptMessages.viewDept,
              promptMessages.viewRole,
              promptMessages.viewEmployees,
              promptMessages.addDept,
              promptMessages.addRole,
              promptMessages.upDate,
            ]
        })};


app.use((req, res) => {
  res.status(404).end();
});

// Start server 
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});