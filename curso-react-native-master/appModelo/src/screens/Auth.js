import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native'
import commonStyles from '../commonStyles'
import backgroundImage from '../../assets/imgs/login.jpg'
import AuthInput from '../components/AuthInput'

export default class Auth extends Component {
    state = {
        stageNew: false,
        name: '',
        password: '',
        confirmPassword: ''
    }

    signinOrSignup = () => {
        if (this.state.stageNew) {
            Alert.alert('Sucesso', 'Criar conta')
        } else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render() {
        return (
            <ImageBackground source={backgroundImage}
                style={styles.background}>
                <Text style={styles.title}>AppModelo</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.stageNew ? 
                            'Criar a conta' : 'Informar seus dados'}
                    </Text>
                    <AuthInput icon='user' placeholder='Nome' style={styles.inout}
                            value={this.state.name}
                            onChangeText={name => this.setState({name})}/>
                    <AuthInput icon='lock' secureTextEntry={true} placeholder='Senha' style={styles.inout}
                            value={this.state.password}
                            onChangeText={password => this.setState({password})}/>
                    {this.state.stageNew &&
                        <AuthInput icon='asterisk' secureTextEntry={true} placeholder='Confirmar Senha' style={styles.inout}
                        value={this.state.confirmPassword}
                        onChangeText={confirmPassword => this.setState({confirmPassword})}/> }

                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.stageNew ? 'Registrar' : 'Entrar'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{padding: 10}}
                    onPress={() => this.setState({
                        stageNew: !this.state.stageNew
                    })}>
                <Text style={styles.buttonText}>
                    {this.state.stageNew ? 'Já possui conta?'
                        : 'Ainda não possui conta?'}
                </Text>    
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 70,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    },
    formContainer: {
        backgroundColor: 'rgb(0,0,0)',
        padding: 20,
        width: '90%',
    },
    inout: {
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 20,
    }
})