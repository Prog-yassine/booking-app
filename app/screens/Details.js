import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Fontisto, FontAwesome, Ionicons, Feather, MaterialCommunityIcons } from 'react-native-vector-icons'
import MapView, {Marker} from 'react-native-maps';

function DetailsScreen() {
  const route = useRoute();
  const { hotel } = route.params || {};

  console.log('Hotel params:', hotel);

  return (
    <SafeAreaView style={{width: '100%', height: '100%', backgroundColor: '#fff' }}>
        <ScrollView>
            <Image source={{uri: hotel?.image}} style={{width: '100%', height: 300, backgroundColor: '#eee'}}/>
            <View style={{width: '100%', padding: 20}}>
                <Text style={{color: '#000', fontSize: 22, fontWeight: 700}}>{hotel?.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 6}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Fontisto name="map-marker-alt" size={17} color="tomato" style={{marginRight: 5}} />
                        <Text>{hotel?.location}</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20}}>
                        <FontAwesome name="star" size={17}  color="#fab70c" style={{marginRight: 3}}/>
                        <Text>{hotel?.stars} <Text style={{color: 'gray'}}>({hotel?.reviews})</Text></Text>
                    </View>
                </View>
                <Text><Text style={{color: 'tomato', fontSize: 25}}>${hotel?.pricePerNight}</Text> Per Night</Text>
                <View style={{paddingVertical: 7}}>
                    <Text style={{color: 'gray'}}>{hotel?.description}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 20}}>
                    <View style={{flexDirection: 'collumn', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="bed-outline" size={24} color="black" />
                        <Text>{hotel?.beds} beds</Text>
                    </View>
                    <View style={{flexDirection: 'collumn', justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="wifi" size={24} color="black" />
                        <Text>Wifi</Text>
                    </View>
                    <View style={{flexDirection: 'collumn', justifyContent: 'center', alignItems: 'center'}}>
                        <Feather name="coffee" size={24} color="black" />
                        <Text>Breakfast</Text>
                    </View>
                    <View style={{flexDirection: 'collumn', justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
                        <Text>Gym</Text>
                    </View>
                </View>
                <View style={{width: '100%', height: 200, borderRadius: 20}}>
                    <MapView
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        style={{width: '100%', height: '100%', borderRadius: 20}}
                        scrollEnabled={false}
                        zoomEnabled={false}
                        rotateEnabled={false}
                        pitchEnabled={false}
                    >
                        <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} style={{width: 20, height: 20}}>
                            <Image
                                source={{ uri: hotel?.image }}
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 24,
                                    borderWidth: 3,
                                    borderColor: '#fff',
                                    resizeMode: 'cover',
                                }}
                            />
                        </Marker>
                    </MapView>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default DetailsScreen;