import React from 'react'
import { SectionList, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import ItemSeparator from '../components/ItemSeparator'
import { styles } from '../theme/appTheme'

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Gatubela" ]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman", "Sirenoman", "Hombre pastelillo" ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "shippden", "boruto", "Vegeta", "KameHouse", "DBZ", "DB", "DB GT" ]
    }
]

const SectionListScreen = () => {
    return (
        <View style={{...styles.globalMargin, flex:1}}>
            <SectionList 
                sections={casas}
                keyExtractor={ (item,i) => item+i}
                ListHeaderComponent={ () => <HeaderTitle title="SectionList" /> }
                ListFooterComponent={ () => (
                    <View style={{marginBottom: 70}}>
                        <HeaderTitle title={"Total de casas " + casas.length} />
                    </View>
                )}
                renderItem={ ({item}) => <Text>{item}</Text> }
                stickySectionHeadersEnabled
                renderSectionHeader={({section}) => (
                    <View style={{backgroundColor:'white'}}>
                        <HeaderTitle title={section.casa} />
                    </View>
                )}
                renderSectionFooter={ ({section}) => (
                    <HeaderTitle title={'Total: ' + section.data.length} />
                ) }
                SectionSeparatorComponent={ () => <ItemSeparator />}
                ItemSeparatorComponent={ () => <ItemSeparator/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default SectionListScreen
