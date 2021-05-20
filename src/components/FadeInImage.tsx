import React, { useState } from 'react'
import { View, Animated, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import useAnimation from '../hooks/useAnimation'

interface Props{
    uri:string;
    style: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {

    const {opacity, fadeIn} = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () =>{
        setIsLoading(false);
        fadeIn();
    }

    return (
        <View style={{justifyContent:'center', alignItems: 'center'}}>
            {
                isLoading && (
                    <ActivityIndicator 
                        color="#5856d6"
                        size={30}
                        style={{position:'absolute'}} 
                    />
                )
            }
            <Animated.Image 
                source={{uri}}
                onLoadEnd={ finishLoading }
                style={{
                    ...style as any,
                    opacity
                }}
                // style={{
                //     width: '100%',
                //     height: 400,
                //     opacity
                // }}
            />
        </View>
    )
}

export default FadeInImage
