import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function insert_temperature(temp: string) {
    const petName = "Nose";
    const ownerName = "Chau";
    try {
        await sql`INSERT INTO Pets (Name, Owner) VALUES (${temp}, ${ownerName});`;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }

    //   const pets = await sql`SELECT * FROM Pets;`;
    //   return NextResponse.json({ pets }, { status: 200 });
} 
