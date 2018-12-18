import Insult from '../model/insult';

export interface IInsultService {
  GetInsults(): Insult[];
}

export default IInsultService;
