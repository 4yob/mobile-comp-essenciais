import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>A voz do mar fala com a alma.</Text>
            <Image source={require("./assets/background-mob2.png")} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#E0FFFF",
        height: "100vh",
        width: "100vw",
        padding: 20,
        gap: 50,
    },
    titulo: {
        fontSize: 30,
        fontWeight: "800",
        color: "#4682B4",
        textAlign: "center",
    },
    image: {
        width: 350,
        height: 350,
        borderRadius: "100%",
    },
});