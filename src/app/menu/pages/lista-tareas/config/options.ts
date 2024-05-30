import { ListaStatus } from "../interfaces/lista.interfaces";
import { traductions } from "../utils/traductions";

export const formOptions: {name: string, value: ListaStatus}[] = [
  {value: 'empty',name: traductions['empty']},
  {value: 'in-progress',name: traductions['in-progress']},
  {value: 'finished',name: traductions['finished']},
]
