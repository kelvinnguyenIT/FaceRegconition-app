import react, {useState} from 'react';
import { Text, View, StyleSheet, Image,StatusBar, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';


const ContactScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagePart}>
                <StatusBar style="light" />
                <Image source={{uri:'http://grandgoldhotel.com/wp-content/uploads/2018/04/contact.jpg'}} style={{width: '100%',height:null,aspectRatio: 8/3,}} />
            </View>
            <View style={{marginTop:20}}>
                <View style={{flexDirection:'row', borderWidth: 1,borderRadius: 30, borderColor: '#dce0fe',overflow:'hidden',marginTop:20,marginLeft:30,marginRight:30,}}>
                <View style={{width:70,height:90,backgroundColor:'#ff1d53',justifyContent:'center',alignItems:'center'}}>
                    <Feather name="headphones" size={50} width={50} color="white" style={{padding:10,}} />
                    </View>
                    <View style={{flexDirection:'column',textAlign:'center',justifyContent:'center',padding:5}}>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            Technical support
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            support@example.com
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            +1 234-567-89
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', borderWidth: 1,borderRadius: 30, borderColor: '#dce0fe',overflow:'hidden',marginTop:20,marginLeft:30,marginRight:30,}}>
                    <View style={{width:70,height:90,backgroundColor:'#ff1d53',justifyContent:'center',alignItems:'center'}}>
                    <FontAwesome name="dollar" size={50} width={50} color="white" style={{padding:10,backgroundColor:'#ff1d53',}}/>
                    </View>
                    <View style={{flexDirection:'column',textAlign:'center',justifyContent:'center',padding:5}}>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            Sales questions
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            sales@example.com
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            +1 234-567-89
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', borderWidth: 1,borderRadius: 30, borderColor: '#dce0fe',overflow:'hidden',marginTop:20,marginLeft:30,marginRight:30,}}>
                    <View style={{width:70,height:90,backgroundColor:'#ff1d53',justifyContent:'center',alignItems:'center'}}>
                    <Ionicons name="file-tray-full" size={50} color="white" style={{padding:10,backgroundColor:'#ff1d53',}} />
                    </View>
                    
                    <View style={{flexDirection:'column',textAlign:'center',justifyContent:'center',padding:5}}>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            Press
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            press@example.com
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            +1 234-567-89
                        </Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', borderWidth: 1,borderRadius: 30, borderColor: '#dce0fe',overflow:'hidden',marginTop:20,marginLeft:30,marginRight:30,}}>
                    <View style={{width:70,height:90,backgroundColor:'#ff1d53',justifyContent:'center',alignItems:'center'}}>
                    <Ionicons name="ios-bug" size={50} color="white" style={{padding:10,backgroundColor:'#ff1d53',}} />
                    </View>
                    
                    <View style={{flexDirection:'column',textAlign:'center',justifyContent:'center',padding:5}}>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            Bug report
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            bugs@example.com
                        </Text>
                        <Text style={{color:'#fff',marginBottom:5}}>
                            +1 234-567-89
                        </Text>
                    </View>
                </View>
            </View>
            
        </ScrollView>
    );
};

export default ContactScreen;

const TEXT = {
    color: '#fff',
    textAlign: 'center',
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#171d2c',
        flex : 1,
    },
});