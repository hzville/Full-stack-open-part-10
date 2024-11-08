import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useRepositories } from '../hooks/useRepositories';
import { useState } from 'react';
import OrderSelector from './OrderSelector';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setOrder }) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item}/>}
      ListHeaderComponent={ <OrderSelector setOrder={setOrder}/>}
    />
  );
};

const RepositoryList = () => {
  const [order, setOrder] = useState('latest');
  const { repositories } = useRepositories(order);
  return <RepositoryListContainer repositories={repositories} setOrder={setOrder}/>;
};

export default RepositoryList;