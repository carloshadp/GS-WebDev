/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardData({ infos }) {

  return (
    <>
      {
        infos.map((info, index) => (
        <Link to={`/NossosDados/${info.id}`} key={index}>
          <div>
            <div>
              <img src={info.place} alt={`Imagem do projeto ${info.id}`} />
            </div>

            <div>
              <h1>Data do projeto:</h1>
              <p>{info.createdAt}</p>
            </div>
          </div>
        </Link>
      ))
      }
    </>
  );
}
