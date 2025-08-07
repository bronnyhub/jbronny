import './card.css';

function Card(){
    return(
        <div className='card'>
            <img
                alt='Logo'
                src='/img/profilepic.png'
                className= 'card-image'/>
            <h2 className='card-title'>@bronnyhub</h2>
            <p className='card-text'>My name is Julia and I am an aerospace engineering with web development hobby.</p>
        </div>
    );
}

export default Card