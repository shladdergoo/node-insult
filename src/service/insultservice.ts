import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import * as shuffle from 'shuffle-array';

import IInsultRepository from '../interface/iinsultrepository';
import IInsultService from '../interface/iinsultservice';
import Insult from '../model/insult';
import Types from '../types';

@injectable()
export class InsultService implements IInsultService {
  private _insultRepository: IInsultRepository;

  constructor(
    @inject(Types.IInsultRepository) insultRepository: IInsultRepository
  ) {
    this._insultRepository = insultRepository;
  }

  public GetInsultsSync(): Insult[] {
    const allInsults = this._insultRepository.GetInsultsSync();

    return shuffle(allInsults).slice(0, 5);
  }
}

export default InsultService;
