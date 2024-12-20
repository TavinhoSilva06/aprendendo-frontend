import { Column } from 'components';
import { ListItem, ListItemProps } from './ListItem';

// Define as propriedades do componente List
type ListProps = {
  items: ListItemProps[];
};

// Define um componente List
export const List: React.FC<ListProps> = ({ items }) => {
  return (
    <Column py="10px">
      {items.map((item, index) => (
        <ListItem key={index} {...item} /> // Renderiza cada item da lista com suas propriedades
      ))}
    </Column>
  );
};
