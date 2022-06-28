import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './styles';
import {StoreItem} from '../../components';
import {stores} from '../../provider/dummy/stores';

const StoresScreen = ({ navigation}) => {
    const onSelected = (item) => {
        navigation.navigate("StoreDetails", {
            storeId: item.id,
            title: item.title,
        });
    };

    const renderItem = ({ item }) => (
        <StoreItem item={item} onSelected={onSelected} />
    );

    return ( <View style={styles.container}>
        <FlatList
            data={stores}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    </View>);
}

export default StoresScreen;