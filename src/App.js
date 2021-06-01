import React from 'react';
import Apolloclient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { PokemonsContainter } from './containers/PokemonsContainer'
import './App.css'

export function App() {
    const client = new Apolloclient({
        uri: 'https://graphql-pokemon2.vercel.app/'
    })
    return (
        <ApolloProvider client={client}>
            <main>
                <PokemonsContainter />
            </main>
        </ApolloProvider>
    )
}
