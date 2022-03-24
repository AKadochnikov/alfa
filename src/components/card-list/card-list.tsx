import {useAdaptedArtists} from '../../hooks/use-adapted-artists/use-adapted-artists';
import {CURRENT_AMOUNT} from '../../const';
import Loading from '../loading/loading';
import Card from '../card/card';

function CardList ():JSX.Element {
  const {artists, isFetching} = useAdaptedArtists(CURRENT_AMOUNT);

  if (isFetching) {
    return (<Loading/>);
  }
  return (
    <section className="cards">
      <h2 className="visually-hidden">Карточки с информацией артистов</h2>
      {artists.map((artist) => <Card key={artist.id} artist={artist}/>)}
    </section>
  );
}

export default CardList;
