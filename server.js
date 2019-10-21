const express = require('express');
const communities = require('./communities.json');
const people = require('./people.json');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Northside Partnership Project',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About NPP',
  });
});

app.get('/project', (req, res) => {
  res.render('project', {
    title: 'Northside Partnership Project',
    communities: communities.profiles,
  });
});

app.get('/contact', (req, res) => {
  // function validateForm() {
  //   var name =  document.getElementById('name').value;
  //   if (name == "") {
  //       document.getElementById('status').innerHTML = "Name cannot be empty";
  //       return false;
  //   }
  //   var email =  document.getElementById('email').value;
  //   if (email == "") {
  //       document.getElementById('status').innerHTML = "Email cannot be empty";
  //       return false;
  //   } else {
  //       var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //       if(!re.test(email)){
  //           document.getElementById('status').innerHTML = "Email format invalid";
  //           return false;
  //       }
  //   }
  //   var subject =  document.getElementById('subject').value;
  //   if (subject == "") {
  //       document.getElementById('status').innerHTML = "Subject cannot be empty";
  //       return false;
  //   }
  //   var message =  document.getElementById('message').value;
  //   if (message == "") {
  //       document.getElementById('status').innerHTML = "Message cannot be empty";
  //       return false;
  //   }
  //   document.getElementById('status').innerHTML = "Sending...";
  //   document.getElementById('contact-form').submit();
  // }
  res.render('contact', {
    title: 'Contact NPP',
  });
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
