const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); 

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Set views directory

// Serve static files (like CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each page/tab
app.get('/', (req, res) => res.render('dashboard'));

// application page 
app.get('/application', (req, res) =>  { 
const applications = [
      {
        application: "Informatica",
        description: "Data Integration",
        status: "Active",
        internal: "Yes",
        manager: "Soulemane Konate",
      },
      {
        application: "NextGen",
        description: "Data pipeline",
        status: "Active",
        internal: "Yes",
        manager: "Noah Alban",
      },
      {
        application: "Ansible",
        description: "Automation",
        status: "Inactive",
        internal: "Yes",
        manager: "Yafet Asfaw",
      },
      {
        application: "CFARRI_UI",
        description: "Dashboard",
        status: "Active",
        internal: "Yes",
        manager: "Sulbha Aggarwal",
      },
    
    ];
    
    res.render('application', { applications});
});

// service page 
app.get('/service', (req, res) => {
    
    const serviceIds = [
    {
        serviceId: "ZK4STDM",
        accountType: "Service Id",
        environment: "DEV",
        usage: "10 GB",
        passwordReset: "10/31/2024",
        contact: "sulbha.aggarwal@bofa.com",
    },
    {
        serviceId: "ZSFRRL1S",
        accountType: "App Id",
        environment: "QA",
        usage: "12 GB",
        passwordReset: "11/01/2024",
        contact: "soulemane.konate@bofa.com",
    },
    {
        serviceId: "ZKANNW6",
        accountType: "Service Id",
        environment: "UAT",
        usage: "14 GB",
        passwordReset: "11/02/2024",
        contact: "yafet.asfaw@bofa.com",
    },
    {
        serviceId: "ZKV4jGV",
        accountType: "Service Id / App Id",
        environment: "PreProd",
        usage: "30 GB",
        passwordReset: "09/30/2024",
        contact: "noah.alban@bofa.com",
    },
    ];
    res.render('service', {serviceIds});

});

// 404 Error handling middleware
app.use((req, res) => {
    res.status(404); 
    res.send(`<h1>Error 404: Resource not found</h1>`); 
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});