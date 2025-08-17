import '@picocss/pico';

const Card = ({name, url, description, imageUrl}) => {
  return (
    <article>
      <header>This is header</header>
      {name}
      <footer>This is footer</footer>
    </article>
  )
}

export default Card