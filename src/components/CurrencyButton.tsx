import React, { PropsWithChildren } from 'react'

import { View, Text, StyleSheet} from 'react-native'


/*
!   if i wanna add extra element apart from what is given 

import { PropsWithChildren } from 'react'
type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>
*/




type CurrencyButtonProps = {
    name: string;
    flag: string;
}

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#000000",
    
    }
})

export default CurrencyButton