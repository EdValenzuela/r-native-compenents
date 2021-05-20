import React, { useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

const PullToRefreshScreen = () => {

    const {top} = useSafeAreaInsets();

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>()

    const onRefresh = () =>{
        setRefreshing(true);

        setTimeout( () =>{
            console.log('terminamos');
            setRefreshing(false);
            setData('Hola mundo');
        }, 3500)
    }

    return (
        <ScrollView
            style={{
                marginTop: refreshing ? top : 0
            }}
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="peru"
                    colors={['white', 'red', 'orange']}
                    style={{backgroundColor:'peru'}}
                    tintColor='white'
                    title='refreshing'
                />
            }
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh"/>
                {
                    data && <HeaderTitle title={data} />
                }
            </View>
        </ScrollView>
    )
}

export default PullToRefreshScreen
