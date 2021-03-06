import { searchItunes, itunesSearchRoot } from "./search/search";
import { toSearchUri, ISearchOptions, ItunesSearchOptions } from "./search/search-options";

import { lookupItunes, itunesLookupRoot } from "./lookup/lookup";
import {
  toLookupUri,
  ILookupOptions,
  ItunesLookupOptions,
  ItunesLookupType
} from "./lookup/lookup-options";

import { ItunesExplicitness } from "./result/explicitness";
import { ItunesKind } from "./result/kind";
import { ItunesProperties } from "./result/properties";
import { ItunesWrapperType } from "./result/wrapper-type";
import { ItunesResult } from "./result/result";

import { ItunesMedia } from "./media/media";
import {
  ItunesEntityMovie,
  ItunesEntityPodcast,
  ItunesEntityMusic,
  ItunesEntityMusicVideo,
  ItunesEntityAudioBook,
  ItunesEntityShortFilm,
  ItunesEntityTvShow,
  ItunesEntitySoftware,
  ItunesEntityEbook,
  ItunesEntityAll
} from "./media/entity";

export { searchItunes, itunesSearchRoot } from "./search/search";
export { ItunesSearchOptions } from "./search/search-options";

export { lookupItunes, itunesLookupRoot } from "./lookup/lookup";
export { ItunesLookupOptions, ItunesLookupType } from "./lookup/lookup-options";

export { ItunesExplicitness } from "./result/explicitness";
export { ItunesKind } from "./result/kind";
export { ItunesProperties } from "./result/properties";
export { ItunesWrapperType } from "./result/wrapper-type";
export { ItunesResult } from "./result/result";

export { ItunesMedia } from "./media/media";
export {
  ItunesEntityMovie,
  ItunesEntityPodcast,
  ItunesEntityMusic,
  ItunesEntityMusicVideo,
  ItunesEntityAudioBook,
  ItunesEntityShortFilm,
  ItunesEntityTvShow,
  ItunesEntitySoftware,
  ItunesEntityEbook,
  ItunesEntityAll
} from "./media/entity";

export namespace ItunesSearch {
  export type Properties = ItunesProperties;
  export type Result = ItunesResult;

  export import Explicitness = ItunesExplicitness;
  export import Kind = ItunesKind;
  export import WrapperType = ItunesWrapperType;

  export import Media = ItunesMedia;
  export namespace Entity {
    export import Movie = ItunesEntityMovie;
    export import Podcast = ItunesEntityPodcast;
    export import Music = ItunesEntityMusic;
    export import MusicVideo = ItunesEntityMusicVideo;
    export import AudioBook = ItunesEntityAudioBook;
    export import ShortFilm = ItunesEntityShortFilm;
    export import TvShow = ItunesEntityTvShow;
    export import Software = ItunesEntitySoftware;
    export import Ebook = ItunesEntityEbook;
    export import All = ItunesEntityAll;
  }

  export const search = searchItunes;
  export const SearchRoot = itunesSearchRoot;
  export type SearchOptionsInterface = ISearchOptions;
  export type SearchOptions = ItunesSearchOptions;

  export const lookup = lookupItunes;
  export const LookupRoot = itunesLookupRoot;
  export type LookupOptionsInterface = ILookupOptions;
  export type LookupOptions = ItunesLookupOptions;
  export import LookupType = ItunesLookupType;
}

export default ItunesSearch;
