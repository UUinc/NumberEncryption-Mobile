import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, Pressable } from 'react-native';
import Constants from 'expo-constants';

const dictionary = new Map([
    ['a', '2'],
    ['b', '22'],
    ['c', '222'],
    ['d', '3'],
    ['e', '33'],
    ['f', '333'],
    ['g', '4'],
    ['h', '44'],
    ['i', '444'],
    ['j', '5'],
    ['k', '55'],
    ['l', '555'],
    ['m', '6'],
    ['n', '66'],
    ['o', '666'],
    ['p', '7'],
    ['q', '77'],
    ['r', '777'],
    ['s', '7777'],
    ['t', '8'],
    ['u', '88'],
    ['v', '888'],
    ['w', '9'],
    ['x', '99'],
    ['y', '999'],
    ['z', '9999'],
  ]);

function getKey(map, value) {
    for (const [key, val] of map.entries()) {
        if (val === value)
            return key;
    }
    return null;
}

export default function ConverterScreen() {
    const [text, setText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const copyText = ()=>{
        Alert.alert("Copied successfully!", text)
    }

    const copyEncryptedText = ()=>{
        Alert.alert("Copied successfully!", encryptedText)
    }

    // App mechanic
    const encode = (value)=>
    {
        //Decode only accept alphabets and space
        //add check function here...
        
        setText(value);

        let encrypted = '';
        for (const char of value) 
        {
            if (!dictionary.has(char)){
                encrypted=encrypted.slice(0, -1);
                encrypted+=" ";
                continue;
            }
            
            encrypted += dictionary.get(char);
            encrypted += "-";
        }
        encrypted=encrypted.slice(0, -1);

        setEncryptedText(encrypted)
    }

    const decode = (value)=>
    {
        //Decode only accept numbers and - and space
        //add check function here...
        setEncryptedText(value);

        let decrypted = '';

        const words = value.split(' ');
        for (const word of words) 
        {
            const characters = word.split('-');
            for(const char of characters)
            {
                let c = getKey(dictionary, char);
                if(c==null) c = " ";
                decrypted+=c;
            }
            decrypted+=" ";
        }

        setText(decrypted)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Number Encryption 🔐</Text>
            <View style={styles.textAreaContainer}>
                <TextInput
                    selectionColor={'#33B5E5'}
                    multiline
                    numberOfLines={4}
                    maxLength={408}
                    placeholder={"Write a message to encode"}
                    placeholderTextColor="#33B5E560"
                    value={text}
                    onChangeText={text => encode(text)}
                    style={styles.textArea}
                />
                <View style={styles.encodeContainer}>
                    <Pressable style={styles.button} onPress={copyText}>
                        <Text style={styles.text}>Copy message</Text>
                    </Pressable>
                </View>
                <TextInput
                    selectionColor={'#33B5E5'}
                    multiline
                    numberOfLines={4}
                    maxLength={408}
                    placeholder={"Write a message to decode"}
                    placeholderTextColor="#33B5E560"
                    value={encryptedText}
                    onChangeText={text => decode(text)}
                    style={styles.textArea}
                />
                <View style={styles.encodeContainer}>
                    <Pressable style={styles.button} onPress={copyEncryptedText}>
                        <Text style={styles.text}>Copy encrypted message</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '96%',
    },
    title:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginTop: Constants.statusBarHeight + 20,
        marginBottom: 30
    },
    textAreaContainer:{
        
    },
    textArea: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlignVertical: "top",
        height: 200,
        width: "100%", 
        borderColor: '#33B5E5', 
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
    },
    button: {
        borderRadius: 6,
        paddingVertical: 10,
        paddingLeft: 10, 
        marginVertical: 10,
        backgroundColor: '#33B5E5',
    },
    text: {
        fontSize: 13,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});
