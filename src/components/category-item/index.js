import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DefaultText from '../text';

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.containerTouchable, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <View>
          <DefaultText style={styles.title}>{item.title}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;
