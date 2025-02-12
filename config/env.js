/* eslint-disable no-undef */
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { PORT, NODE_ENV } = process.env;
export { PORT, NODE_ENV };
