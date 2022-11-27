import { useState } from "react";
import styles from "./styles";
import { CheckBox } from '@rneui/base';
import { View } from 'react-native';



export default function App() {
    const [finished, setFinished] = useState(false)

    const done = []

    const click = () => {
        if(finished === true){
            done.push()
        } 
    }


        return (<View style={styles.container}>
            <CheckBox
                id = "2"
                title = "Finish this app"
                checked={finished} 
                onPress={() => setFinished(!finished)}/>
            </View>
    );
}