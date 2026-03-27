const imgPlaceholder = 'https://placehold.co/500x700?text=IMG+NOT+FOUND'

export default function AppCards({element}) {

const { 
  name,
  original_language, 
  original_name, 
  title, 
  original_title, 
  vote_average, 
  poster_path
} = element


  console.log(name, title, original_language)

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

  return (
    <ul className="list-unstyled">
      <li><img src={poster_path !== null ? `https://image.tmdb.org/t/p/w500/${poster_path}` : imgPlaceholder} alt={title} /></li>
      <li>{title || name}</li>
      <li>{original_title || original_name}</li>
      <li><span className={`fi fi-${handleCoutryCode(original_language)}`}></span></li>
      <li>{vote_average}</li>
    </ul>
  )
}
