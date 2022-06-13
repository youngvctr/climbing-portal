import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

app.use(express.static('public'));

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/views');

app.get('/', (req, res) => {
  res.render('home', { name: 'muho' });
});

app.listen(4000, () => console.log('Server is listening... => http://localhost:4000 🎉'));
