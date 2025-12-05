"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  codigo: Number;
  nome: string;
  cpf: string;
  telefone: string;
  endereco: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "codigo",
    header: "ID",
  },
  {
    accessorKey: "nome",
    header: "Nome",
  },
  {
    accessorKey: "cpf",
    header: "CPF",
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
  },
  {
    accessorKey: "endereco",
    header: "Endereço",
  },
]