import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

export default function ChatItem() {
    return (
        <TouchableOpacity activeOpacity="0.8" style={{ flexDirection: "row", alignItems: "center", position: "relative", paddingHorizontal: 8, marginVertical: 5, borderColor: "#eee", borderBottomWidth: 0.2, paddingVertical: 10  }}>
            <View style={{ flex: 0.2 }}>
                <Image
                    source={{ uri: 'http://assets1.ignimgs.com/2016/03/02/clash-royale-buttonjpg-c74daf.jpg' }}
                    style={{ width: 40, height: 40, borderRadius: "50%" }}
                />
            </View>
            <View>
                <Text style={{ fontSize: 10, fontFamily: "sans-serif" }}>Renu Didi</Text>
                <Text style={{ fontSize: 10, color: "#757575", fontFamily: "sans-serif" }}>Call kar dena</Text>
            </View>
            <Text style={{ position: "absolute", top: 8, right: 10, fontSize: 9, color: "#757575" }}>5:46 am</Text>
        </TouchableOpacity>
    )
}
