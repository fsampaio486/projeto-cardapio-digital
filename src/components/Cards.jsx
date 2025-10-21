import Card from "./Card";
import { pratosPrincipais, sobremesas, bebidas } from "../assets/cardapio";

const Cards = ({ numCategoriaSelecionada }) => {
  const itensCategoria = [pratosPrincipais, sobremesas, bebidas];
  const categoriaSelecionada = itensCategoria[numCategoriaSelecionada];

  return (
    <div className="cards">
      {categoriaSelecionada.map((item) => (
        <Card
          titulo={item.nome}
          preco={item.preco}
          descricao={item.descricao}
          imagem={item.imagem}
        />
      ))}
    </div>
  );
};

export default Cards;
