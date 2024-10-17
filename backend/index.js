const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const cors = require('cors');

const mockData = {
    users: {
        "ilker": {
            experiences: [
                { title: "Senior Product Designer", dates: "2019 - Present (3 years)" },
                { title: "Product Designer", dates: "2017 - 2019 (2 years)" }
            ],
            certifications: [],
            education: [
                { institution: "Computer Programming, Humber College", dates: "2024 - Present" }
            ],
            skills: [
                "User Research", "UI Design", "Product Design"
            ],
            projects: [
                { title: "ReFolio", date: "2024 - Present" }
            ],
            contacts: {
                email: "contact@theilker.com",
                linkedin: "linkedin.com/in/ilkeroztbm"
            },
            info: {
                name: "Ilker Ozturk",
                title: "Full Stack Web/App Developer",
                location: "Markham, ON, Canada"
            }
        }
    }
};

app.use(session({
    secret: 'whocaresaboutthis',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000, secure: false }
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));

app.get('/getExperience/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.json(user.experience);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/getEducation/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.json(user.education);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/getSkills/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.json(user.skills);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/getProjects/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.json(user.projects);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/getContacts/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.json(user.contacts);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/getInfo/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.json(user.info);
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/profile/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.render('ProfileView', {
            noEditButton: true, 
            username: req.params.username, 
            ...user.info, ...user, user
        });
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/profile/dynamic/:username', (req, res) => {
    const user = mockData.users[req.params.username];
    if (user) {
        res.render('ProfileViewDynamicFetch', {
            enableEditButtons: false, 
        });
    } else {
        res.status(404).send('User not found');
    }
});

app.get('/api/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = mockData.users[userId];
    
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

app.listen(8000, () => {
    console.log('App listening on port 8000');
});