import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    const usuarioName = request.query.usuarioName;
    const emailName = request.query.emailName;
    const generoName = request.query.generoName;
    const estadoName = request.query.estadoName;
    const cidadeName = request.query.cidadeName;
    if (!usuarioName || !emailName || !generoName || !estadoName || !cidadeName) throw new Error('Pet and owner names required');
    await sql`INSERT INTO Usuario (Name, Email, Genero, Estado, Cidade ) VALUES (${usuarioName}, ${emailName}), ${generoName}, ${estadoName}, ${cidadeName};`;
  } catch (error) {
    return response.status(500).json({ error });
  }
 
  const pets = await sql`SELECT * FROM Usuario;`;
  return response.status(200).json({ pets });
}

