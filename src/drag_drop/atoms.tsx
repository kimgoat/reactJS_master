import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoStste2 = atom<IToDoState>({
  key: "toDo",
  default: {
    "To Do": ["1", "2", "3"],
    Doing: [],
    Done: [],
  },
});
