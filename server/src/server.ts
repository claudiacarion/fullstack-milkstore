import express, {Express, Request, Response} from 'express';
import milk from './milk.json';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response)=>{
	res.send('this is working');
});

app.get('/api/milk', (req: Request, res: Response)=>{
  return res.status(200).json({ milk });
});

app.listen(port, ()=> {
console.log(`[Server]: I am running at http://localhost:${port}`);
});