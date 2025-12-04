import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <header>
          <h1>Cadastros</h1>
        </header>

        <table>
          <tr>
            <td>ID</td>
            <td>Nome</td>
            <td>CPF</td>
            <td>Telefone</td>
            <td>Endereço</td>
          </tr>
        </table>
      </main>
    </div>
  );
}
