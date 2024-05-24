"use client"
import {redirect} from 'next/navigation'

export default function Home() {

  redirect('/dashboard/main')
  

  return (
    <>
      <h1>Hola desde la pagina principal</h1>
    </>
  );
}
