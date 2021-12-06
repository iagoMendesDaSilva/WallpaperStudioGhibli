import axios, { AxiosResponse, AxiosError } from 'axios';
import { SafeArea, ListMovies } from './style';
import React, { useEffect, useState } from 'react';

import { Movie } from './commons';
import { ActivityIndicator } from 'react-native';

interface MovieModel {
    image: string,
}

export const Movies: React.FC = () => {

    const [movies, setMovies] = useState({ data: [] })
    const [loading, setLoading] = useState(true)
    const [loadingIndex, setLoadingIndex] = useState(-1)

    useEffect(() => getMovies(), [loading])

    const getMovies = () => {
        axios.get("https://ghibliapi.herokuapp.com/films")
            .then((resp: AxiosResponse) => setMovies({ data: resp.data }))
            .catch((err: AxiosError) => console.log(err))
            .finally(() => setLoading(false))
    }

    return (
        <SafeArea >
            {
                loading ?
                    <ActivityIndicator size={"large"} />
                    :
                    <ListMovies<any>
                        numColumns={2}
                        data={movies.data}
                        keyExtractor={(item: MovieModel, index: number) => String(index)}
                        renderItem={({ item, index }: { item: MovieModel, index: number },) =>
                            <Movie
                                loadingIndex={loadingIndex}
                                setLoadingIndex={setLoadingIndex}
                                index={index}
                                item={item} />} />
            }
        </SafeArea>
    );
};
