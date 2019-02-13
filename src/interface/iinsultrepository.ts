import Insult from '../model/insult';

export interface IInsultRepository {
  GetInsults(): Promise<Insult[]>;
  GetInsultsSync(): Insult[];
}

export default IInsultRepository;
