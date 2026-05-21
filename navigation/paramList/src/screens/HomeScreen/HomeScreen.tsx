import { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { homeScreenStyles } from './HomeScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../../App';
import { User } from '../../model/User';

type HomeScreenProps = {
    navigation: StackNavigationProp<StackParamList, 'Home'>;
}

export function HomeScreen({navigation}: HomeScreenProps){
    const [ nome, setNome ] = useState('')
    const [ cargo, setCargo ] = useState('')
    const [ apelido, setApelido ] = useState('')
    const user: User = {nome: nome, cargo: cargo, apelido: apelido}

    const navToUserScreen = () => {
        navigation.navigate('User',  user )
    }

    return(
        <View style = {{gap: 7}}>
            <TextInput
                style= {homeScreenStyles.textField}
                placeholder='Digite seu nome aqui...'
                value={nome}
                onChangeText={(text) => setNome(text)}
            />
            <TextInput  
                style= {homeScreenStyles.textField}
                placeholder='Digite seu cargo aqui...'
                value={cargo}
                onChangeText={(text) => setCargo(text)}
            />
            <TextInput
                style= {homeScreenStyles.textField}
                placeholder='Digite apelido aqui...'
                value={apelido}
                onChangeText={(text) => setApelido(text)}
            />
            <Button title='cadastrar' onPress={navToUserScreen}/>
        </View>
    )
}