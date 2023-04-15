import gouache from './gouache.jpg';
import './Portfolio.css';

function Portfolio() {
  const cards = [
    {
      title: "Animatics",
      image: gouache
    }
  ];

  return (
    <div className='portfolio'>
      {cards.map(card => <PortfolioCard card={card} />)}
    </div>
  );
}

function PortfolioCard({ card: { title, image } }) {
  return (
    <div className='portfolio__card'>
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  )
}

export default Portfolio;
