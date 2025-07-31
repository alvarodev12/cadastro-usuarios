import api from "../../services/api";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/styles";
import TopBackgroud from "../../components/TopBackground";

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <div>
      <TopBackgroud />
      <h1>Listagem de Usuários</h1>

      {users.map((user) => (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
        </div>
      ))}
      <Button>Voltar</Button>
    </div>
  );
}

export default ListUsers;
