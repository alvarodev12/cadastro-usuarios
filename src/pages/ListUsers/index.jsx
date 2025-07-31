import api from "../../services/api";
import { useEffect, useState } from "react";
import { Button } from "../../components/Button/styles";
import TopBackgroud from "../../components/TopBackground";
import Trash from "../../assets/trash.svg";

import {
  AvatarUser,
  CardUsers,
  Container,
  ContainerUsers,
  Title,
  TrashIcon,
} from "./styles";
import { useNavigate } from "react-router-dom";

function ListUsers() {
  // const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  let users = [
    {
      age: 39,
      email: "maria@gmail.com",
      id: "iuoho2873as0273027302uu209u32",
      name: "Maria",
    },
    {
      age: 37,
      email: "luana@gmail.com",
      id: "90821as9030820NH3291Casa3N28",
      name: "Luana",
    },
    {
      age: 27,
      email: "jordan@gmail.com",
      id: "908219030820NHasasas3291C3N28",
      name: "Jordan",
    },
    {
      age: 47,
      email: "joao@gmail.com",
      id: "908219030820NHasaassas3291C3N28",
      name: "João",
    },
  ];

  useEffect(() => {
    async function getUsers() {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    }
    getUsers();
  }, []);

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`);

    const upadateUsers = users.filter((user) => user.id !== id);
    setUsers(upadateUsers);
  }

  return (
    <Container>
      <TopBackgroud />
      <Title>Lista de Usuários</Title>

      <ContainerUsers>
        {users.map((user) => (
          <CardUsers key={user.id}>
            <AvatarUser
              src={`https://avatar.iran.liara.run/public?username=${user.id}`}
            />
            <div>
              <h3>{user.name}</h3>
              <p>{user.age}</p>
              <p>{user.email}</p>
            </div>
            <TrashIcon
              src={Trash}
              alt="icone-lixo"
              onClick={() => deleteUsers(user.id)}
            />
          </CardUsers>
        ))}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
