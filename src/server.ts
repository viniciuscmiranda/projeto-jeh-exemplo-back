import fastify from "fastify";
import cors from "@fastify/cors";
import { Movie } from "./types/Movie";

const server = fastify();

server.register(cors, {
  origin: "*",
});

server.get("/movies", () => {
  const movies: Movie[] = [
    {
      id: 1,
      name: "O Poderoso Chefão",
      score: 9.5,
    },
    {
      id: 2,
      name: "Tudo em Todo Lugar ao Mesmo Tempo",
      score: 9,
    },
    {
      id: 3,
      name: "Homem-Aranha: Através do Aranhaverso",
      score: 10,
    },
  ];

  return movies;
});

server.listen({ port: 3333 }).then(() => console.log("server ready!"));
