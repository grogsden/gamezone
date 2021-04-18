import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';

export default function ReviewDetails({ route }) {
    const { title, body } = route.params;
    const ratingIcons = () => {
        let images = [];
        for(let i = 0; i < route.params.rating; i++){
            let heart = [];
            heart.push(<Image style={style.icon} source={require('../assets/rating-1.png')} />)
            images.push(heart)
            }

        return images

        }

    

    return (
        <View style={globalStyles.container}>
           <Card>
                <Text>{ title }</Text>
                <Text>{ body }</Text>
                <View style={style.rating} >
                    <Text>GameZone rating: </Text>
                    <View style={style.icon} >
                        { ratingIcons() }
                    </View>
                </View>
           </Card>
        </View>
    )
}

const style = StyleSheet.create({
 rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
 },
 icon: {
     flexDirection: 'row',
 }
})
