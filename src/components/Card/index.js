import "./index.scss";

const Card = ({title, src}) => {
    return(
        <img className="card" src={src} alt={title} />
    );
};

export default Card;