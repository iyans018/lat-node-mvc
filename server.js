const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const port = 3000;
const dbURI = 'mongodb+srv://iyans018:iyans018@cluster0.9dasq.mongodb.net/node-tutorial?retryWrites=true&w=majority'

// Others Setup
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Connection Database and Running Server
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
            console.log('Connected to database');
        });
    })
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.redirect('/blog');
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' })
})
// Blog Routes
app.use('/blog', blogRoutes);
// 404 Route
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});