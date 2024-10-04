import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div class="container">
      <h1>Bem-vindo ao Site de Pokémons</h1>

      <h2>Pesquisar e Favoritar Pokémons</h2>
      <p>
        Nosso site permite que você pesquise por seus Pokémons favoritos e os
        adicione à sua lista de favoritos. Utilize a barra de pesquisa para
        encontrar qualquer Pokémon e clique no ícone de coração para adicioná-lo
        ou removê-lo da sua lista de favoritos.
      </p>

      <h2>Pokémons Favoritados</h2>
      <p>
        Na página de Pokémons Favoritados, você pode ver todos os Pokémons que
        você adicionou à sua lista de favoritos. Esta página permite que você
        gerencie seus favoritos e veja detalhes adicionais sobre cada Pokémon.
      </p>

      <h2>Contato com os Desenvolvedores</h2>
      <p>
        Se você tiver alguma dúvida ou sugestão, entre em contato com os
        desenvolvedores do site. Estamos sempre abertos a feedback e prontos
        para ajudar!
      </p>
      <div class="contact-info">
        <p>Email: alecoimbra20177@souunilavras.com</p>
        <p>Email: bredleypinheiro@souunilavras.com</p>
        <p>Nome: Alexandre Silva Coimbra</p>
        <p>Nome: Bredley Richardy Pinheiro</p>
      </div>
    </div>
  );
};

export default Contact;
