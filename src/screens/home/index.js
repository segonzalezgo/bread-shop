import React from 'react';
import {View} from 'react-native';

import {Button, Card, DefaultText} from '../../components';
import {styles} from './styles';

const HomeScreen = ({ navigation}) => {
    return (<View style={styles.container}>
        <DefaultText style={styles.text}>Home Screen!</DefaultText>
        <Card style={styles.buttonContainer}>
            <Button style={styles.button} title={'Category Shop'} onPress={ () => navigation.navigate('Categories')} />
            <Button style={styles.button} title={'Stores'} onPress={ () => navigation.navigate('Stores')} />
        </Card>
    </View>);
}

export default HomeScreen;