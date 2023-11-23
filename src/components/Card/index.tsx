import { Main } from "./styles"

type CardProps = {img: string; titulo: string; desc: string; desc2: string}

function Card({img, titulo, desc, desc2}:CardProps){
    return (    
    <Main>
        <div className = "card">
            <img src={img} alt=""/>
            <div className="card-content">
                <h2>
                    {titulo}
                </h2>
                <h4>O que é?</h4>
                <p>
                    {desc}
                </p>
                <h3>Como evitar?</h3>
                <h6>
                    {desc2}
                </h6>
            </div>
        </div>
    </Main>
    )
}

export default Card