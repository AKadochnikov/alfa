import {Artists} from './types/types';

export const getAdaptedArtists = (artists: Artists[]) => artists.slice().map((artist) => ({
  artistHref: artist.artist_href,
  artistName: artist.artist_name,
  sourceUrl: artist.source_url,
  url: artist.url,
  isFavorite: false,
}));
