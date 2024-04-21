import { StyleSheet, Text, View, Modal, Image, TextInput, Button} from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({visible , onAddCourse, onCancel}) {
    const [enteredCourseText, setEnteredCourseText] = useState('')
    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText('')
    }
    const courseInputHandler = (enteredText) => {
        setEnteredCourseText(enteredText)
    }
  return (
    <Modal
        animationType="slide"
        visible={visible}
        >
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/cblogo.png')} />
            <TextInput  value={enteredCourseText} onChangeText={courseInputHandler} style={styles.textInput} placeholder='Yeni kurs ekle!' />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='İptal et' onPress={onCancel} color='red' />
                </View>
                <View style={styles.button}>
                    <Button title='Ekle' color='blue' onPress={addCourseHandler}/>
                </View>
            </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'gray',
        padding : 15,
    },
    image : {
        width : 150,
        height : 150,
        borderRadius : 20,
        margin : 20,
    },
    textInput : {
        borderWidth : 1,
        width : '100%',
        padding : 10,
        borderRadius : 10,
        borderColor : 'purple',
        backgroundColor : 'pink',
    },
    buttonContainer : {
        flexDirection : 'row',
    },
    button : {
        width : 100,
        margin : 20,
        borderWidth : 1,
        borderRadius : 5,
        backgroundColor : 'white',
        borderColor : 'purple',
    },
})