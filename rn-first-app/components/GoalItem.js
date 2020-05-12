import React from 'react';
import { View, Text, Stylesheet } from 'react-native';

const GoalItem = props => {
     return (
         <View style={Stylesheet.listItem}>
             <Text>{itemData.items.value}</Text>
         </View>
     );
};

const styes = Stylesheet.create

export default GoalItem;