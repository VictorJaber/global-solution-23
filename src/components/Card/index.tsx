import { Main } from "./styles"

type CardProps = {img: string; titulo: string; desc: string}

function Card({img, titulo, desc}:CardProps){
    return (    
    <Main>
        <div className = "card">
            <img src={img} alt=""/>
            <div className="card-content">
                <h2>
                    {titulo}
                </h2>
                <p>
                    {desc}
                </p>
                <a href="#" className="button">
                        Find out more 
                    <span className="material-symbols-outlined">
                        arrow_right_alt
                    </span>
                 </a>
            </div>
        </div>
    </Main>
    )
}

export default Card