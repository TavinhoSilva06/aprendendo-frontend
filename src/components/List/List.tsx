import { Column } from 'components';
import { ListItem } from './ListItem';

type ListProps = {
  items: [];
};


export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column py="10px">
      {items.map((item, index) => (
        <ListItem key={index} {...item} />
      ))}
    </Column>
  );
};