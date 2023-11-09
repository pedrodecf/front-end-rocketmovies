import { Container, Description, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note"
import { Footer } from "../../components/Footer"
import { TfiPlus } from "react-icons/tfi"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <Container>
      <Header />
      <Description>
        <h2>Meus filmes</h2>
        <Link to="/new">
          <Button icon={<TfiPlus />} title="Adicionar filme" />
        </Link>
      </Description>
      <main>
        <Content>
          <Note
            data={{
              title: "Interestelar",
              rating: "3",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
          <Note
            data={{
              title: "Oppenheimer",
              rating: "5",
              description:
                "Oppenheimer é um filme histórico de drama dirigido por Christopher Nolan e baseado no livro biográfico vencedor do Prêmio Pulitzer, Prometeu Americano: O Triunfo e a Tragédia de J. Robert Oppenheimer, escrito por Kai Bird e Martin J. Sherwin. Ambientado na Segunda Guerra Mundial, o longa acompanha a vida de J. Robert Oppenheimer (Cillian Murphy), físico teórico da Universidade da Califórnia e diretor do Laboratório de Los Alamos durante o Projeto Manhattan - que tinha a missão de projetar e construir as primeiras bombas atômicas. A trama acompanha o físico e um grupo formado por outros cientistas ao longo do processo de desenvolvimento da arma nuclear que foi responsável pelas tragédias nas cidades de Hiroshima e Nagasaki, no Japão, em 1945. Além de Cillian, o elenco também traz nomes como Emily Blunt, Matt Damon, Robert Downey Jr., Florence Pugh, Gary Oldman, Jack Quaid, Gustaf Skarsgård, Rami Malek e Kenneth Branagh.",
              tags: [{ id: "1", name: "Histórico" }],
            }}
          />
          <Note
            data={{
              title: "Five Nights at Freddy's",
              rating: "0",
              description:
                "Five Nights At Freddy's - O Pesadelo Sem Fim é a primeira adaptação cinematográfica da famosa franquia homônima de jogos lançada em 2014 e criada por Scott Cawthon. Dirigido por Emma Tammi (Terra Assombrada, Fair Chase), a história se passa em um restaurante familiar tipicamente americano chamado Freddy Fazbear's Pizza, que está atualmente desativado, e acompanha Mike Schmidt (Josh Hutcherson), um jovem que está passando por alguns problemas financeiros. Felizmente, ele vê a resposta para seus problemas ao ser contratado para trabalhar como o vigia noturno da pizzaria. Criado por Henry Emily e William Afton, o lugar costumava ser muito famoso por seus característicos robôs animados, que eram o rosto do local e faziam a festa das crianças durante o dia. Porém, quando o sol se põe e a escuridão da noite chega, um segredo obscuro e mortal é revelado: os bonecos animatrônicos ganham vida, transformando-se em assassinos psicopatas e partindo em uma violenta matança.",
              tags: [
                { id: "1", name: "Horror" },
                { id: "2", name: "Mistério" },
              ],
            }}
          />
        </Content>
        <Footer />
      </main>
    </Container>
  )
}
