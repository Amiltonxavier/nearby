import { Welcome } from '@/components/welcome'
import { View, Text } from 'react-native'
import { Steps } from '@/components/steps'

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                padding: 32,
                gap: 40,
            }}>

            <Welcome />
            <Steps />
        </View>
    )
}
