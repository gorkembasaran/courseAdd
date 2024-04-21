import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import CourseInput from './components/CourseInput';

export default function App() {
  const [modelIsVisible, setModelIsVisible] = useState(false)
  const [courses, setCourses] = useState([])
  const startModel = () => {
    setModelIsVisible(true);
  };
  const endModel = () => {
    setModelIsVisible(false);
  };
  const addCourse = (courseTitle) => {
    setCourses((currentCourses) => [
      ...currentCourses,
      {
        text : courseTitle,
        id : Math.random().toString()
      }
    ])
    endModel();
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button 
          title='Kurs Ekle'
          color='red'
          onPress={startModel}
        />
        <CourseInput 
          visible={modelIsVisible}
          onAddCourse={addCourse}
          onCancel={endModel}
        />
        <View>
          <FlatList 
            data={courses}
            renderItem={({item}) => 
            <View style={styles.courseItem}>
              <Text style={styles.courseText}>{item.text}</Text>
            </View>
          }
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 50,
    paddingHorizontal : 20
  },
  courseItem : {
    backgroundColor : 'gray',
    margin : 8,
    borderRadius : 5,
  },
  courseText : {
    padding : 8,
    color : 'white',
  }
});
