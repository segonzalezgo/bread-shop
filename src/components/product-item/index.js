import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import DefaultText from '../text';

const ProductItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.containerTouchable}
        onPress={() => onSelected(item)}
      >
        <View>
          <DefaultText style={styles.name}>{item.name}</DefaultText>
        </View>
        <View>
          <DefaultText style={styles.detail}>${item.price.toFixed(2)}</DefaultText>
          <DefaultText style={styles.detail}>{item.weight}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;
