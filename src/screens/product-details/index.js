import React from 'react';
import {styles} from './styles';
import {View} from 'react-native';
import {DefaultText} from '../../components';
import {products} from '../../provider/dummy/products';

const ProductDetailsScreen = ({ route}) => {
    const  { productId } = route.params;
    const product =  products.find(product => product.id === productId);

    return (<View style={styles.container}>
        <DefaultText style={styles.text}> {product.id}</DefaultText>
        <DefaultText style={styles.text}> {product.name}</DefaultText>
        <DefaultText style={styles.text}> {product.description}</DefaultText>
        <DefaultText style={styles.text}> {product.weight}</DefaultText>
        <DefaultText style={styles.text}> {product.price.toFixed(2)}</DefaultText>
    </View>);
}

export default ProductDetailsScreen;