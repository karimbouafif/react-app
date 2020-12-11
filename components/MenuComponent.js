import React from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import { ListItem } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {

        return (
            <TouchableOpacity onPress={()=> props.onPress(item.id)}>
            <ListItem>

                <Image source={require('./images/uthappizza.png')} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList
            data={props.dishes}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        />
    );
}


export default Menu;
