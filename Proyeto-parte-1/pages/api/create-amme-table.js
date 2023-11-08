import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const result =
      await sql`CREATE TABLE Usuario ( Name varchar(255), Email varchar(255), Genero varchar(10), Estado varchar(10), Cidade varchar(10) );`;
    return response.status(200).json({ result });
  } catch (error) {
    return response.status(500).json({ error });
  }
}