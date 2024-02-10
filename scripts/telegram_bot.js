// npm i telegraf express body-parser cors
const { Telegraf } = require('telegraf')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const USER_ID = 721653619;

const app = express();
const bot = new Telegraf('6709580422:AAFi0yXg-vDFKIUCYVMofl7M8YXlukOhpbI');

app.use(bodyParser.json());
app.use(cors());
app.post('/sendMessage', (req, res) => {
    reqData = req.body.data;
    message = `📝НОВА ЗАЯВКА📝\n\n🪪Ім'я: ${reqData.name}\n☎️Номер телефону: ${reqData.phone_number}\n💌Пошта: ${reqData.email}`;
    bot.telegram.sendMessage(USER_ID, message);
    res.status(200).send('Message sent successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
