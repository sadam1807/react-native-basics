import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Main  = (props) => {
    return(
        <View>
            <Text>{props.content}</Text>
        </View>
    )
}

export default Main;