import { create } from "zustand";
import { Genre } from "./entities/Genre";
import { Platform } from "./entities/Platform";

export interface GameQuery {
  genre?: Genre;
  platform?: Platform;
  sortOrder?: string;
  searchText?: string;
}

interface GameStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genre) => void;
  setPlatform: (platgorm: Platform) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameStore>((set) => ({
  gameQuery: {} as GameQuery,
  setGenre: (genre) => set(store => ({gameQuery: {...store.gameQuery, genre: genre}})),
  setPlatform: (platform) => set(store => ({gameQuery: {...store.gameQuery, platform: platform}})),
  setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder: sortOrder}})),
  setSearchText: (searchText) => set(({gameQuery: {searchText: searchText}}))
}));

export default useGameQueryStore;
