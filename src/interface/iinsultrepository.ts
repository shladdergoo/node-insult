import Insult from '../model/insult';

export interface IInsultRepository {
  GetInsultsSync(): Insult[];
}

export default IInsultRepository;
