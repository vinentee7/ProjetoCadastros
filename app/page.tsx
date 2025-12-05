'use client';

import { useEffect, useState } from "react";
import axios from 'axios';
import { DataTable } from "./data-table";
import { columns, Payment } from "./columns";


export default function Home() {

  const [data,setData] = useState<Payment[]>([]);

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
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
