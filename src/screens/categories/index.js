import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {categories} from '../../provider/dummy/categories';
import {CategoryItem} from '../../components';

const CategoriesScreen = ({ navigation}) => {
    const onSelected = (item) => {
        navigation.navigate("Products", {
          categoryId: item.id,
          title: item.title,
        });
      };
    
      const renderItem = ({ item }) => (
        <CategoryItem item={item} onSelected={onSelected} />
      );

    return ( <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>);
}

export default CategoriesScreen;