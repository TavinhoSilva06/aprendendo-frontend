import { Column, Text } from 'components'; // Importa os componentes Column e Text do módulo 'components'

// Define o tipo das propriedades do ListItem
export type ListItemProps = {
  label: string // Propriedade 'label' do tipo string
};

// Define o componente ListItem usando React.FC (Functional Component) e o tipo ListItemProps
export const ListItem: React.FC<ListItemProps> = ({ label }) => {
  return (
    <Column
      width="100%" // Define a largura como 100%
      bg="rgba(0, 0, 0, 0.2)" // Define a cor de fundo com transparência
      p="20px" // Define o padding (espaçamento interno) de 20px
      mb="10px" // Define a margem inferior de 10px
      borderRadius="4px" // Define o border-radius (bordas arredondadas) de 4px
      borderLeft="5px solid #fff" // Define uma borda esquerda sólida de 5px e cor branca
      >
    <Text>{label}</Text> 
    </Column>
  );
};
