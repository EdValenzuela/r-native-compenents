import React, { useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle'

const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([
                ...numbers,
                ...newArray
            ])
        }, 1500);
    }

    const renderItem = (item: number) => (

        <FadeInImage  
            uri={`https://picsum.photos/id/${item}/200/300`}
            style={{
                width: '100%',
                height: 250
            }}
        />
    )

    return (
        <View style={{ flex: 1, backgroundColor: '#ccc' }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={ () => (

                    <View style={{marginHorizontal: 20}}>
                        <HeaderTitle title="InfiniteScroll" />
                    </View>

                )}

                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={ ()=> (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent:'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={30} color="#5856d6" />
                    </View>
                ) }
            />
        </View>
    )
}

export default InfiniteScrollScreen
