import { ICharacters } from 'models/characters/characters-types'
import { atom } from 'recoil'

export const charactersAtom = atom<ICharacters[]>({
  key: 'charactersAtom',
  default: [],
})