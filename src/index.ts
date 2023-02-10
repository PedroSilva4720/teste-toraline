import { server } from './server';
import * as dotenv from 'dotenv';

dotenv.config();

server.listen(process.env.PORT || 9001);
