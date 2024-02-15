const {Telegraf} = require('telegraf')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const USER_ID = 721653619;

const app = express();
const bot = new Telegraf('6431559190:AAEJwT0b0WXZ5C9-qk3KcNZZJPDZwW3WRYg');

app.use(bodyParser.json());
app.use(cors());
app.post('/sendMessage', (req, res) => {
    reqData = req.body.data;
    serviceText = {
        baby: 'В очікуванні дива',
        family: 'Дитяча сімейна',
        certificate: 'Подарунковий сертифікат'
    }
    service = reqData.photo_session === undefined ? '' : serviceText[reqData.photo_session]
    message = `📝НОВА ЗАЯВКА📝\n\n🪪Ім'я: ${reqData.name}\n☎️Номер телефону: ${reqData.phone_number}\n💌Пошта: ${reqData.email}\n🔑Послуга: ${service}\n💬Коментар: ${reqData.comment}`;
    bot.telegram.sendMessage(USER_ID, message);
    res.status(200).send('Message sent successfully');
});
bot.start((ctx) => {
    ctx.reply('Ваш ID: ' + ctx.from.id);
});
bot.launch();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
