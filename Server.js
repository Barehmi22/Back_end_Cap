require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const db = require('./db');
const ApplicationRoutes = require('./data/application/ApplicationRouter');
const AgentRoutes = require ('./data/agents/AgentRouter');

// const userRoutes = require('./users/user.routes');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ AllowOrigins: '*' }));

// middleware pour parser le corps des requetes en json

app.use(express.json());

// utilisation de route defini pour les utilisateur

app.use('/application' ,ApplicationRoutes);
app.use('/agent' ,AgentRoutes);

app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`);
});