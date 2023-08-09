import React from "react"
import Header from "../../components/header/Header"
import './HomeStyle.css'; 

// Componente Home representa a página inicial do aplicativo
const Home: React.FC = () => {

    return (
      <>
        <Header noHome title="Elegance" />
        <div className="card-container">
          <div className="card">
            <div className="card-header">Apresentando a Elegance Perfumaria: Onde a Beleza e o Encanto se Encontram!</div>
            <div className="card-body">
              <p>
                Seja bem-vindo(a) à Elegance Perfumaria, o destino perfeito para os apaixonados por fragrâncias e beleza! Somos uma loja especializada em perfumes que tem como missão trazer à tona o encanto e a sofisticação através de uma ampla variedade de fragrâncias que encantarão seus sentidos.
              </p>
              <br />
              <p>
                Na Elegance, acreditamos que cada indivíduo possui uma essência única, e nossas coleções foram cuidadosamente selecionadas para atender a todos os gostos e personalidades. Desde clássicos atemporais até as mais recentes tendências olfativas, temos o perfume perfeito para cada ocasião.
              </p>
              <br />
              <p>
                Nossos produtos são cuidadosamente curados das marcas mais prestigiadas e conceituadas do mundo dos perfumes, garantindo a qualidade, a autenticidade e a durabilidade de cada fragrância que temos em nossas prateleiras. Nossa equipe é composta por apaixonados por perfumes que estão sempre prontos para ajudar você a encontrar a fragrância ideal que se adapte à sua identidade e estilo de vida.
              </p>
              <br />
              <p>
                Na Elegance, a experiência do cliente está no centro de tudo o que fazemos. Queremos que sua visita à nossa loja seja memorável, desde o momento em que você entra até o momento em que sai com o perfume escolhido. Além de nossa vasta seleção de perfumes, também oferecemos serviços personalizados de consultoria, permitindo que você descubra fragrâncias exclusivas e surpreendentes que se tornarão a extensão perfeita da sua personalidade.
              </p>
              <br />
              <p>
                Além disso, a Elegance também oferece uma gama de produtos complementares, incluindo loções corporais, óleos perfumados e kits de presentes elegantes, tornando-nos um destino completo para quem busca aprimorar sua rotina de cuidados pessoais e presentear entes queridos com uma experiência inesquecível.
              </p>
              <br />
              <p>
                Venha nos visitar na Elegance Perfumaria e permita-nos guiá-lo(a) em uma jornada sensorial única através do maravilhoso mundo dos perfumes. Nossa equipe está ansiosa para recebê-lo(a) de braços abertos e proporcionar uma experiência de compra excepcional e repleta de elegância. Prepare-se para descobrir o poder da fragrância e se apaixonar por cada nota olfativa que encontrar.
              </p>
              <br />
              <p>
                Elegance Perfumaria - Onde cada perfume conta uma história de elegância e charme. Seja quem você é, seja elegante!
              </p>
            </div>
          </div>
        </div>
      </>
    )
}

export default Home
