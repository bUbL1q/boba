import { Client } from 'pg'

export default async () => {
  const client = new Client({
    user: 'postgres', // исправлено
    password: '12345678',
    host: 'localhost', // исправлено
    port: 5432,
    database: 'demo', // исправлено
  });

  await client.connect();
  return client;
};
