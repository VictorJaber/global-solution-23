import { CarrouselContainer, CarrouselTitle, NewsInfo } from './styles';

export function CarrouselNews() {
  return (
    <CarrouselContainer>
      <div id="news-carrousel" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#news-carrousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#news-carrousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <CarrouselTitle>Últimas notícias</CarrouselTitle>
        <div className="carousel-inner rounded">
          <a
            href="http://www.minhasaudehapvida.com.br/noticia/pandemia-quais-sao-os-lugares-mais-contaminados-da-nossa-casa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="carousel-item active">
              <img
                src="http://www.minhasaudehapvida.com.br/sites/default/files/styles/1140x500/public/noticias-images-highlight/shutterstock_1268717557_1.jpg?itok=sh0IDmHP"
                className="d-block w-100"
                alt="Pessoal limpando uma bancada"
              />
              <NewsInfo>
                <h3>
                  Pandemia: quais são os lugares mais contaminados da nossa
                  casa?
                </h3>
                <p>
                  Alguns lugares da casa merecem uma atenção especial.
                  Inclusive, durante a pandemia da Covid-19,...
                </p>
              </NewsInfo>
            </div>
          </a>
          <a
            href="http://www.minhasaudehapvida.com.br/noticia/cuidado-com-boca-seca"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="carousel-item">
              <img
                src="http://www.minhasaudehapvida.com.br/sites/default/files/styles/1140x500/public/noticias-images-highlight/boca-seca.jpg?itok=LgsfXXcx"
                className="d-block w-100"
                alt="Pessoa com a mão na boca"
              />
              <NewsInfo>
                <h3>Cuidado com a boca seca</h3>
                <p>
                  Aquela sensação de que a boca está seca, sem saliva o
                  suficiente, pode ser um...
                </p>
              </NewsInfo>
            </div>
          </a>
        </div>
      </div>
    </CarrouselContainer>
  );
}
