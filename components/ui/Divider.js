import { View, Text } from "react-native";

const Divider = ({children}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', paddingTop: 18, paddingBottom: 15}}>
      <View style={{flex: 1, height: 1, backgroundColor: 'white', marginRight: 8, marginLeft: 16}} />
      <View>
        <Text style={{width: 40, textAlign: 'center', color: 'white', fontSize: 15}}>{children}</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: 'white', marginRight: 16, marginLeft: 8}} />
    </View>
  );
};

export default Divider;