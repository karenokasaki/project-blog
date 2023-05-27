import "./App.css";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

function App() {
   const arrayPosts = [
      {
         title: "Olá Mundo",
         text: "Este é o meu primeiro post. Olá, pessoal!",
         author: "João Silva",
      },
      {
         title: "Minha Receita Favorita",
         text: "Hoje, vou compartilhar minha receita favorita. É super deliciosa!",
         author: "Maria Santos",
      },
      {
         title: "Recomendação de Livro",
         text: "Acabei de terminar de ler um livro incrível. Altamente recomendado!",
         author: "Pedro Rocha",
      },
   ];

   return (
      <div className="App">
         {/* Invocando o componente  */}
         <Navbar />
         <Posts info={arrayPosts} />
      </div>
   );
}

export default App;
