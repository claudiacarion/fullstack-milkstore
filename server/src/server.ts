import express, {Express, Request, Response} from 'express';
import { milkData } from './milk';
import cors from 'cors';

const app: express.Application = express();
const port = 8080;

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}));

app.get('/', (req: Request, res: Response)=>{
	res.send('this is working');
});

app.get('/api/milk', (req: Request, res: Response)=>{
  return res.status(200).json(milkData);
});

app.listen(port, ()=> {
console.log(`[Server]: running at http://localhost:${port}`);
});