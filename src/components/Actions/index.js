import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
   <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
        
        <TouchableOpacity style={styles.actionbutton}>
            <View style={styles.areaButton}>
                <AntDesign name='addfolder' size={26} color="#000"/>
            </View>
            <Text style={styles.buttonLabel}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionbutton}>
            <View style={styles.areaButton}>
                <AntDesign name='tagso' size={26} color="#000"/>
            </View>
            <Text style={styles.buttonLabel}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionbutton}>
            <View style={styles.areaButton}>
                <AntDesign name='creditcard' size={26} color="#000"/>
            </View>
            <Text style={styles.buttonLabel}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionbutton}>
            <View style={styles.areaButton}>
                <AntDesign name='barcode' size={26} color="#000"/>
            </View>
            <Text style={styles.buttonLabel}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionbutton}>
            <View style={styles.areaButton}>
                <AntDesign name='setting' size={26} color="#000"/>
            </View>
            <Text style={styles.buttonLabel}>Conta</Text>
        </TouchableOpacity>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14,
    },
    actionbutton:{
        alignItems: 'center',
        marginRight: 32
    },
    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'

    },
    buttonLabel:{
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',

    }
})