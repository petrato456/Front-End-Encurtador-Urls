import React, { useEffect, useState } from "react";
import { MainForm } from "./styles";
import { Container } from "../Container";
import ListUrl from "../ListUrl";

function UrlForm() {
  return (
    <div>
      <MainForm>
        <input
          type="text"
          name="url"
          id="url"
          placeholder="Digite uma url..."
        />
        <button>Encurtar Url</button>
      </MainForm>
      <ListUrl />
    </div>
  );
}

export default UrlForm;
