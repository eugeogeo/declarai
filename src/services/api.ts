import axios from "axios";
import { GetUsuario, Usuario } from "../@types/baseTypes";


const baseURL = "";

const api = axios.create({
  baseURL,
});

export async function getUsuarioByRa(data: GetUsuario) {
  const response = await api.get<Usuario>(
    "/v1/usuario/",
    {
      params: data,
    },
  );

  return response;
}