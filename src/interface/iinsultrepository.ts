import Insult from '../model/insult';

export interface IInsultRepository {
  GetInsults(): Insult[];
}

export default IInsultRepository;
