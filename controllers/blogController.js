const blogModel = require('../models/blogModel');

const blog_index = (req, res) => {
    blogModel.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/index', { title: 'Blog - Home Page', blogs: result });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        });
};

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Blog - Create Post' })
};

const blog_manage = (req, res) => {
    blogModel.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('blogs/manage', { title: 'Blog - Manage Post', blogs: result })
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        });
};

const blog_create_post = (req, res) => {
    const blog = new blogModel(req.body);

    blog.save()
        .then(result => {
            res.redirect('/');
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        });
};

const blog_view = (req, res) => {
    const id = req.params.id;
    blogModel.findById(id)
        .then(result => {
            res.render('blogs/view', { title: 'Blog - Artikel', blogs: result });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        })
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    blogModel.findByIdAndDelete(id)
        .then(result => {
            res.redirect('/blog/manage');
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        })
};

const blog_update_get = (req, res) => {
    const id = req.params.id;

    blogModel.findById(id)
        .then(result => {
            res.render('blogs/update', { title: 'Blog - Update Post', blog: result });
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        })
};

const blog_update_post = (req, res) => {
    const id = req.params.id;
    let updateBlog = {};
    updateBlog.title = req.body.title;
    updateBlog.author = req.body.author;
    updateBlog.body = req.body.body;

    blogModel.findByIdAndUpdate(id, updateBlog)
        .then(result => {
            res.redirect('/blog/manage');
        })
        .catch(err => {
            res.status(404).render('404', { title: 'Page Not Found' });
        })
};

module.exports = {
    blog_index,
    blog_create_get,
    blog_manage,
    blog_create_post,
    blog_view,
    blog_delete,
    blog_update_get,
    blog_update_post
};