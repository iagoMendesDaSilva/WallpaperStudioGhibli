import React, { memo, useEffect, useState } from "react"
import { Banner, Picture, Loader } from './style'
import { Dimensions } from 'react-native'
import ManageWallpaper, { TYPE } from 'react-native-manage-wallpaper';

const width = Dimensions.get("screen").width
const height = Dimensions.get("window").height

interface Props {
    item: {
        image: string,
    },
    index: number,
    loadingIndex: number,
    setLoadingIndex: (value: number) => void,
}

export const Movie = memo(({ item, index, loadingIndex, setLoadingIndex }: Props) => {

    const { image } = item

    useEffect(() => {
        if (loadingIndex != -1 && loadingIndex === index) {
            setWallpaper()
        }
    }, [loadingIndex])

    const setWallpaper = () => {
        ManageWallpaper.setWallpaper(
            {
                uri: image,
            },
            () => setLoadingIndex(-1),

            TYPE.HOME,
        );
    };

    return (
        <Banner disabled={loadingIndex != -1}
            onPress={() => setLoadingIndex(index)} width={width / 2} height={height / 3}>
            {
                loadingIndex != -1 && index === loadingIndex &&
                <Loader color={"white"} size={"large"} />
            }
            <Picture source={{ uri: image }} resizeMode={"stretch"} />
        </Banner>
    )
})