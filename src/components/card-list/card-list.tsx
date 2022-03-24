import {useAdaptedArtists} from '../../hooks/use-adapted-artists/use-adapted-artists';
import {CURRENT_AMOUNT} from '../../const';

function CardList ():JSX.Element {
  const {artists} = useAdaptedArtists(CURRENT_AMOUNT);
  // eslint-disable-next-line no-console
  console.log(artists);
  return (
    <section className="cards">
      <h2 className="visually-hidden">Карточки с информацией артистов</h2>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon active-favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
      <div className="card">
        <a className="card-link" href="https://www.pixiv.net/en/users/47065875">
          <img className="card-image" src="https://nekos.best/api/v2/neko/0427.png" width="216" height="364" alt="Аватарка артиста"/>
        </a>
        <h3 className="card-artist-name">かえで</h3>
        <div className="buttons-container">
          <a className="button" href="https://www.pixiv.net/en/artworks/88682108">Подробнее</a>
          <button className="button button-add-favorite" type="button">
            <svg className="favorite-icon" width="19" height="17" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.4 17a1 1 0 0 1-.8-.4l-7-7.9A5.4 5.4 0 0 1 6 0c1.3 0 2.5.5 3.5 1.3C10.5.5 12 0 13.1 0c3 0 5.5 2.4 5.5 5.4 0 1.3-.5 2.5-1.3 3.4l-7 7.9c-.3.2-.5.3-.9.3Zm-6-9.5 6.1 6.9 6.3-7c.5-.5.7-1.2.7-2 0-1.8-1.5-3.3-3.3-3.3-1 0-2 .5-2.8 1.3-.3.3-.6.4-.9.4-.3 0-.6-.2-.8-.4A3.7 3.7 0 0 0 6 2.1a3.3 3.3 0 0 0-3.3 3.3c0 .9.3 1.6.7 2.1Z"/>
            </svg>
          </button>
        </div>
        <button className="button button-delete">Удалить</button>
      </div>
    </section>
  );
}

export default CardList;
