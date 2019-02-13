import Insult from '../model/insult';

export interface IInsultService {
  GetInsults(): Promise<Insult[]>;
  GetInsultsSync(): Insult[];
}

export default IInsultService;
