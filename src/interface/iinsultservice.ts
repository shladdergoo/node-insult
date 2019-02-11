import Insult from '../model/insult';

export interface IInsultService {
  GetInsultsSync(): Insult[];
}

export default IInsultService;
