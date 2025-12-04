'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from 'axios';

type CharactersProps = {
  id: string;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
};

export default function Home() {

  const [data,setData] = useState<CharactersProps[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const handleFetch = async () => {
      try{
        const response = await axios.get('http://localhost:8000', 
        {
          signal: controller.signal
        }
      );

      setData(response.data.results);
      } catch (error){
        console.log(error);
      }
    };

    handleFetch();

    return () => {
      controller.abort();
    }
  }, []);

  return (
    <div>
      <main>
        <header>
          <h1>Cadastros</h1>
        </header>
      </main>
    </div>
  );
}
