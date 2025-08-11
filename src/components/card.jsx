import './card.css';

function Card({ imgSrc, title, text, link }) {
    const handleClick = ()=> {
        window.open(link, '_blank');
    };
    return(
        <div className='card' onClick={handleClick}>
            <img
                alt={title}
                src={imgSrc}
                className= 'card-image'/>
            <h2 className='card-title'>{title}</h2>
            <p className='card-text'>{text}</p>
        </div>
    );
}

export default Card