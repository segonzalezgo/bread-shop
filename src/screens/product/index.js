import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {ProductItem} from '../../components';
import {products} from '../../provider/dummy/products';


const ProductsScreen = ({ navigation, route }) => {
    const { categoryId } = route.params;

    const filterProducts = products.filter(
        (product) => product.categoryId === categoryId
    );

    const onSelected = (item) => {
        navigation.navigate("ProductDetails", {
            productId: item.id,
            name: item.name,
        });
    };

    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={filterProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
};

export default ProductsScreen;