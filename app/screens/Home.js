import { View, Text, Button, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { Fontisto, Ionicons, AntDesign, FontAwesome  } from 'react-native-vector-icons';

const Recomended = [
    {
        id: 1,
        image: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D',
        name: 'The Ritz-Carlton, Dubai',
        description: 'Luxury hotel in Dubai Marina',
        beds: 3,
        wifi: true,
        gym: true,
        breakfast: true,
        location: 'Dubai Marina, Dubai, UAE',
        stars: 5,
        reviews: 2134,
        pricePerNight: 450
    },
    {
        id: 2,
        image: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
        name: 'The Grand Regent Hotel',
        description: 'Located in the heart of downtown, The Grand Regent offers timeless elegance with modern luxury',
        beds: 4,
        wifi: true,
        breakfast: false,
        gym: true,
        location: 'Downtown, New York, USA',
        stars: 4.5,
        reviews: 1578,
        pricePerNight: 320
    },
    {
        id: 3,
        image: 'https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg',
        name: 'Alpine Ridge Lodge',
        description: 'Ideal for adventurers and nature lovers, Alpine Ridge Lodge sits at the base of the snow-capped mountains',
        beds: 2,
        wifi: true,
        breakfast: true,
        gym: true,
        location: 'Aspen, Colorado, USA',
        stars: 4.2,
        reviews: 894,
        pricePerNight: 210
    }
]


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ width: '100%', height: '100%', backgroundColor: '#f7f7f7' }}>
        <ScrollView style={{paddingHorizontal: 20}}>
            <View style={{width: '100%', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{paddingHorizontal: 15, height: 35, backgroundColor: '#fff', borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Fontisto name="map-marker-alt" size={17} color="black" style={{marginRight: 10}} />
                    <Text>Morocco, Agadir</Text>   
                </View>
                <TouchableOpacity>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{width: '100%', marginVertical: 40}}>
                <Text style={{color: 'gray'}}>Hello Yassine</Text>
                <Text style={{color: '#000', fontSize: 25, fontWeight: 700}}>Let's find best hotel</Text>
            </View>
            <View style={{width: '100%', height: 50, backgroundColor: '#fff', borderRadius: 100, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10}}>
                <Fontisto name="search" size={17} color="gray" style={{marginRight: 0}} />
                <TextInput placeholder="Search for hotel" style={{ paddingHorizontal: 10, flex: 1}} placeholderTextColor='gray'/>
            </View>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                <Text style={{fontSize: 15, fontWeight: 600}}>Recomended Hotel</Text>
                <Text style={{color: 'tomato'}}>see all</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom: 20}}>
                {Recomended.map((item) => (
                    <TouchableOpacity
                        key={item?.id}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Details', { hotel: item })}
                        style={{ width: 270, height: 230, backgroundColor: '#fff', borderRadius: 20, marginRight: 15, padding: 0, justifyContent: 'flex-end' }}
                    >
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Image source={{uri: item?.image}} style={{width: '100%', height: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}/>
                        </View>
                        <View style={{padding: 15}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 5}}>{item?.name}</Text>
                            <Text style={{color: 'gray', fontSize: 13}} numberOfLines={1} ellipsizeMode="tail">{item?.description}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                <Text style={{fontSize: 15, fontWeight: 600}}>Nearby Hotels</Text>
                <Text style={{color: 'tomato'}}>see all</Text>
            </View>
            <View style={{marginBottom: 20}}>
                {[1].map((item, index) => (
                    <View key={index} style={{ width: '100%', height: 100, backgroundColor: '#fff', marginBottom: 20, borderRadius: 20, paddingRight: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 100}}>
                            <Image style={{width: '100%', height: '100%', borderTopLeftRadius: 20, borderBottomLeftRadius: 20}} source={{uri: 'https://img.freepik.com/free-photo/type-entertainment-complex-popular-resort-with-pools-water-parks-turkey-with-more-than-5-million-visitors-year-amara-dolce-vita-luxury-hotel-resort-tekirova-kemer_146671-18728.jpg?semt=ais_hybrid&w=740'}}/>
                        </View>
                        <View style={{flex: 1, paddingHorizontal: 10}}>
                            <Text style={{fontSize: 17, fontWeight: 600, paddingVertical: 3}}>Morocco - Best Hotel</Text>
                            <Text style={{color: 'gray', fontWeight: 300, paddingVertical: 3}}>Atlantic Hotel</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <FontAwesome name="star" size={15} color="#fab70c" />
                                <Text style={{marginLeft: 3}}>4.5</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;