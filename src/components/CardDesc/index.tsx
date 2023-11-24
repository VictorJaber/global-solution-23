import { Main } from "./styles"

type CardProps = {titulo: string; desc: string}

function CardDesc({titulo, desc}:CardProps){
    return (    
    <Main>
        <div>
          <div>
            <article>
                <h2>{titulo}</h2>
                <p>{desc}</p>
            </article>
          </div>
        </div>
    </Main>
    )
}

export default CardDesc