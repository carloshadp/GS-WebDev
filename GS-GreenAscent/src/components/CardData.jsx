import { Link } from "react-router-dom"


export default function CardData({infos}) {
    
    console.log(infos)
  return (
    <>
        {
            infos.map((info, index) => (
            <Link to={`/NossosDados/${info.id}`} key={index}>
                <div>
                    <div>
                        <img src={info.place} />
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
  )
}
// CardData.propTypes = {
//     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     createdAt: PropTypes.string.isRequired,
//     place: PropTypes.string.isRequired,
// };