import { SPACES } from '../../../theme';

export class FormStyles {
  static form = { margin: 'auto' };
  static mainBox = {
    height: '100vh',
    padding: `${SPACES.l} ${SPACES.s}`,
    display: 'grid',
    placeItems: 'center'
  };
  static childBox = { bgcolor: '#F5F5F5', padding: `${SPACES.s}`, borderRadius: `${SPACES.s}` };
  static div = { display: 'flex', justifyContent: 'space-between' };
  static button = { margin: `${SPACES.m} 0` };
}
