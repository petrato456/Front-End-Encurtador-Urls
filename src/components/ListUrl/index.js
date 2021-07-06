import React from "react";

import { Container } from "../Container";
import { TiScissorsOutline, TiTrash } from "react-icons/ti";

export default function ListUrl() {
  return (
    <>
      <Container>
        <h4>
          <TiScissorsOutline /> Urls Cadastradas
        </h4>
        <ul>
          <li>
            Url Original - Url Encurtada <TiTrash />
          </li>
        </ul>
      </Container>
    </>
  );
}
