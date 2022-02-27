import React from "react";
import MainImage from "./assets/main-image.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg"
import {
  Container,
  Image,
  ContainerItems,
  H1,
  InputLabel,
  Input,
  Button,
  User
} from "./styles";

const app = () => {
  const users = [
    { id: Math.random(), name: "Nani", age: 25 },
    { id: Math.random(), name: "Fátima", age: 29 },
    { id: Math.random(), name: "Gilmar", age: 35 },
    { id: Math.random(), name: "Dodi", age: 19 },
  ];

  return (
    <Container>
      <Image alt="logo-imagem" src={MainImage} />
      <ContainerItems>
        <H1>Hello!</H1>

        <InputLabel>Name</InputLabel>
        <Input placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input placeholder="Age" />

        <Button>
          Sing Up <img alt="arrow" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>  <p>{user.age}</p> <button><img alt="trash" src={Trash} /> </button>
            </User>
          )) }
        </ul>
      </ContainerItems>
    </Container>
  );
};

export default app;
