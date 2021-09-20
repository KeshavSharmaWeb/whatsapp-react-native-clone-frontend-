import React from 'react'
import { View, Text } from 'react-native'
import Header from '../components/Header'
import ChatItem from '../components/ChatItem'

export default function Home() {
    return (
        <View>
            <Text><Header screen="chats"/></Text>
            <ChatItem />
        </View>
    )
}
