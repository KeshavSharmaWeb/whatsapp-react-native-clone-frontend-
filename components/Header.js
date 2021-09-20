import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Search from "react-native-vector-icons/Octicons";
import Menu from "react-native-vector-icons/Entypo";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Header(props) {
    return (
        <View style={{ backgroundColor: '#075e55', width: "100%" }}>
            <View style={{
                flexDirection: "row", alignItems: "center", justifyContent: "space-between", backgroundColor: "#075e55", marginVertical: 10, paddingHorizontal: 7
            }}>
                <Text style={{ color: "white" }}>WhatsApp</Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity style={styles.icon}>
                        <Search name="search"></Search>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon}>
                        <Menu name="dots-three-vertical" ></Menu>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#075e55", paddingHorizontal: 50 }}>
                <Text style={{ paddingHorizontal: 25, color: props.screen === 'chats' ? "white" : "#7db1aa", borderColor: props.screen === 'chats' ? "white" : "#075e55", fontSize: 9, paddingVertical: 7, paddingBottom: 4, borderBottomWidth: 2, }}>CHATS</Text>
                <Text style={{ paddingHorizontal: 25, color: props.screen === 'status' ? "white" : "#7db1aa", borderColor: props.screen === 'status' ? "white" : "#075e55", fontSize: 9, paddingVertical: 7, paddingBottom: 4, borderBottomWidth: 2, }}>STATUS</Text>
                <Text style={{ paddingHorizontal: 25, color: props.screen === 'calls' ? "white" : "#7db1aa", borderColor: props.screen === 'calls' ? "white" : "#075e55", fontSize: 9, paddingVertical: 7, paddingBottom: 4, borderBottomWidth: 2, }}>CALLS</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        marginLeft: 15,
        color: "white"
    },
})