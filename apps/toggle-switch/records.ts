import * as styles from '../styles';

type Record = {
  id: number;
  title: string;
  checked: boolean;
  activeColor?: string;
};

export const records: Record[] = [
  { id: 1, title: 'Config 1', checked: false },
  { id: 2, title: 'Config 2', checked: false },
  {
    id: 3,
    title: 'Config 3',
    checked: false,
    activeColor: styles.blue,
  },
  {
    id: 4,
    title: 'Config 4',
    checked: false,
    activeColor: styles.tarcoize,
  },
  { id: 5, title: 'Config 5', checked: true },
];
