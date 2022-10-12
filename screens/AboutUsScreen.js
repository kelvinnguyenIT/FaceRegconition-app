import react from 'react';
import { Text, View, StyleSheet, Image, StatusBar, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { SliderBox } from 'react-native-image-slider-box';
import { Ionicons } from '@expo/vector-icons';

const AboutUsScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imagePart}>
                <StatusBar style='light' />
                <SliderBox
                images={[
                    'https://miro.medium.com/max/1400/1*x1JZIt-6lSDI5UPjP7Hdxw.jpeg',
                    'https://blog.dormakaba.com/tachyon/2020/04/dormakaba-Blog-Post-pictures-_-1024-x-683-83.jpg',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPd9MDloVHRDmSZxUQgekcXoC2rpsiG5qUPB5vEe4qZiHJX3D0iDlHmDI4EAN9xVBx_dc&usqp=CAU',
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-jGCfYNfzhq5CswbQQE3vPW0hCmnSBMifch_tKm5bYwomo-Zh9tJw8J-zux4R2uyPfI&usqp=CAU',
                    'https://5.imimg.com/data5/KL/FW/PM/SELLER-12751218/face-detection-system-500x500.jpg'
                ]}
                sliderBoxHeight={200}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor='#FFEE58'
                inactiveDotColor='#90A4AE'
                paginationBoxVerticalPadding={20}
                autoplay
                circleLoop
                style={{width: '100%',height:null,aspectRatio: 8/3,}}
                />
            </View>
            <View style={styles.tittle}>
                <View style={styles.tittleInside}>
                    <View style={{borderWidth: 1, height: 1, borderTopColor: '#fff', flex: 1,}}></View>
                    <Text style={styles.TextTittle}>About Us</Text>
                    <View style={{borderWidth: 1, height: 1, borderTopColor: '#fff', flex: 1,}}></View> 
                </View>
            </View>
            <ScrollView style={styles.body}>
                <Text style={styles.TextBodyHeader}>We provide biometrics as a competitive advantage for our customers</Text>
                <Text style={styles.TextBody}>RecFaces makes facial biometrics simple and applicable. We provide a wide range of ready-made biometric solutions for businesses to upgrade their security and technological efficiency.</Text>
                
                <View style={styles.tittleInside}>
                    <View style={{borderWidth: 1, height: 1, borderTopColor: '#fff', flex: 1,}}></View>
                    <Text style={styles.TextTittle}>Face Recognition</Text>
                    <View style={{borderWidth: 1, height: 1, borderTopColor: '#fff', flex: 1,}}></View> 
                </View>

                <Text style={styles.TextBody}>RecFaces makes facial biometrics simple and applicable. We provide a wide range of ready-made biometric solutions for businesses to upgrade their security and technological efficiency.</Text>
            </ScrollView>
        </ScrollView>
    );
};

export default AboutUsScreen;

const TEXT = {
    color: '#fff',
    textAlign: 'center',
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#171d2c',
        flex : 1,
    },
    tittle : {
        padding: 10,
        paddingBottom: 10,
    },
    tittleInside : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems : 'center',
        marginTop: 10,
    },
    TextTittle : {
        ...TEXT,
        marginLeft : 10,
        marginRight: 10,
        textTransform: 'uppercase',
    },
    body : {
        padding: 10,
    },
    TextBodyHeader : {
        ...TEXT,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    TextBody : {
        ...TEXT,
        marginTop: 20,
        textAlign: 'center',
    },
});