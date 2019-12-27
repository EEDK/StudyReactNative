import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function loading(){
    return <View style ={styles.container}>
        <Text style = {styles.text}>Getting the weather</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "flex-end",
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA"
    },
    text :{
        color:"black",
        fontSize : 30,
    }
})