const imgPlaceholder = 'https://placehold.co/500x700?text='

export default function AppCards({ element }) {

  const {
    name,
    original_language,
    original_name,
    title,
    original_title,
    vote_average,
    poster_path,
    overview
  } = element

  function handleCoutryCode(language) {
    switch (language) {
      case 'en': return 'us';
      case 'ja': return 'jp';
      case 'zh': return 'cn';
      case 'ko': return 'kr';
      case 'cs': return 'cz';
      default: return language;
    }
  }

  function handleVoteAvarage(vote_average) {
    const vote = Math.ceil(vote_average / 2)
    const markup = []
    for (let i = 0; i < vote; i++) {
      markup.push(<i key={i} className="bi bi-star-fill text-warning"></i>)
    }
    for (let i = vote; i < 5; i++) {
      markup.push(<i key={i} className="bi bi-star-fill text-secondary"></i>)
    }
    return markup
  }

  return (
    <div className="col g-5">
      <figure className="card bg-transparent border-0">
        <div className="card-body bg-transparent position-relative z-0 text-white p-0 border">
          <div className="card-img h-100">
            <img className="img-fluid w-100 h-100 position-relative z-1" src={poster_path !== null ? `https://image.tmdb.org/t/p/w342/${poster_path}` : `${imgPlaceholder}${title.toUpperCase()} immagine non trovata`} alt={title} />
          </div>
          <div className="card-text d-flex position-absolute flex-column z-n1 px-4">
            <h2 className="h4"><strong>Titolo: </strong>{title || name}</h2>
            <h3 className="h6"><strong>Titolo originale: </strong>{original_title || original_name}</h3>
            <span><strong>Lingua: </strong>
              <span className={`fi fi-${handleCoutryCode(original_language)}`}></span>
            </span>
            <span>Valutazione: {handleVoteAvarage(vote_average)}</span>
            <p className="mt-2"><strong>Overview:</strong> {overview}</p>
          </div>

        </div>
      </figure>
    </div>
  )
}
