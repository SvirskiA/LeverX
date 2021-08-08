const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let users = [
    {
        id: 1,
        firstName: 'Dzmitry',
        lastName: 'Antonenka',
        firstNameNative: 'Дмитрий',
        middleNameNative: 'Павлович',
        lastNameNative: 'Антоненко',
        role: 'employee',
        avatar: 'person2.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'd.antonenka@leverx.com',
        password: '123',
        skipeId: 'd.antonenka',
        cNumber: 'C5200001',
        hireDate: 1561933200000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'm'
    },
    {
        id: 2,
        firstName: 'Alena',
        lastName: 'Zhukava',
        firstNameNative: 'Елена',
        middleNameNative: 'Федоровна',
        lastNameNative: 'Жукова',
        role: 'editor',
        avatar: 'person3.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'a.zhukava@leverx.com',
        password: '123',
        skipeId: 'a.zhukava',
        cNumber: 'C5200001',
        hireDate: 1561436200000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'w'
    },
    {
        id: 3,
        firstName: 'Maxim',
        lastName: 'Podolsky',
        firstNameNative: 'Максим',
        middleNameNative: 'Петрович',
        lastNameNative: 'Подольский',
        role: 'admin',
        avatar: 'person4.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'm.podolsky@leverx.com',
        password: '123',
        skipeId: 'm.podolsky',
        cNumber: 'C5200001',
        hireDate: 1562926200000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'm'
    },
    {
        id: 4,
        firstName: 'Anna',
        lastName: 'Belova',
        firstNameNative: 'Анна',
        middleNameNative: 'Петровна',
        lastNameNative: 'Белова',
        role: 'employee',
        avatar: 'person1.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'a.belova@leverx.com',
        password: '123',
        skipeId: 'a.belova',
        cNumber: 'C5200001',
        hireDate: 1561935200000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'w'
    },
    {
        id: 5,
        firstName: 'Vitaliy',
        lastName: 'Vlasov',
        firstNameNative: 'Виталий',
        middleNameNative: 'Иванович',
        lastNameNative: 'Власов',
        role: 'editor',
        avatar: 'person5.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'v.vlasov@leverx.com',
        password: '123',
        skipeId: 'v.vlasov',
        cNumber: 'C5200001',
        hireDate: 1561935700000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'm'
    },
    {
        id: 6,
        firstName: 'Stepan',
        lastName: 'Smirnov',
        firstNameNative: 'Степан',
        middleNameNative: 'Иванович',
        lastNameNative: 'Смирнов',
        role: 'admin',
        avatar: 'person6.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 's.smirnov@leverx.com',
        password: '123',
        skipeId: 's.smirnov',
        cNumber: 'C5200001',
        hireDate: 1561835700000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'm'
    },
    {
        id: 7,
        firstName: 'Anton',
        lastName: 'Bely',
        firstNameNative: 'Антон',
        middleNameNative: 'Антонович',
        lastNameNative: 'Белый',
        role: 'employee',
        avatar: 'person8.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'a.bely@leverx.com',
        password: '123',
        skipeId: 'a.bely',
        cNumber: 'C5200001',
        hireDate: 1561836700000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'm'
    },
    {
        id: 8,
        firstName: 'Pavel',
        lastName: 'Pavlov',
        firstNameNative: 'Павел',
        middleNameNative: 'Антонович',
        lastNameNative: 'Павлов',
        role: 'editor',
        avatar: 'person9.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'p.pavlov@leverx.com',
        password: '123',
        skipeId: 'p.pavlov',
        cNumber: 'C5200001',
        hireDate: 1561846700000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'm'
    },
    {
        id: 9,
        firstName: 'Olga',
        lastName: 'Petrova',
        firstNameNative: 'Ольга',
        middleNameNative: 'Ивановна',
        lastNameNative: 'Петрова',
        role: 'admin',
        avatar: 'person7.png',
        department: 'Web&Mobile',
        room: '1608',
        internalPhone: '123',
        mobilePhone: '+375 29 1234567',
        email: 'o.petrova@leverx.com',
        password: '123',
        skipeId: 'o.petrova',
        cNumber: 'C5200001',
        hireDate: 1561842700000,
        status: 'Active',
        vacation: 'Enabled',
        adressBookRedesign: 'Enabled',
        sex: 'w'
    },
]

app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.send('Hello API');
})

app.get('/users', (request, response) => {
    response.send(users);
})

app.get('/users/:user', (request, response) => {
    console.log(request.params);
    let user = users.find((u) => {
        if (u.id === +request.params.user) {
            return u.id === +request.params.user
        } else if (u.email === request.params.user) {
            return u.email === request.params.user
        }
    })
    response.send(user);
})

app.post('/login', (request, response) => {
    const user = users.find(({ email, password }) => email === request.body.email && password === request.body.password)

    if (!user) {
        response.sendStatus(403);
    } else {
        response.sendStatus(200);
    }
})

app.put('/users/:id', (request, response) => {
    let user = users.find((u) => {
        return u.id === +request.params.id
    })

    for (let key in request.body) {
        user[`${key}`] = request.body[`${key}`]
    }
    response.send(user);
})

app.listen(3001, () => {
    console.log('app started');
})
