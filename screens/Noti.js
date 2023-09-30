import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default class Noti extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(), // Store the selected date and time
    };
  }

  schedulePushNotification = async (selectedDate) => {
    const hours = selectedDate.getHours();
    const minutes = selectedDate.getMinutes();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Hey!! it's time",
        body: 'Have a drink and surprise your liver 💧 ',
        data: { data: '💧💧💧' },
      },
      trigger: {
        hour: hours,
        minute: minutes,
        repeats: true,
      },
    });

    Alert.alert('You will be reminded at ' + hours + ':' + minutes);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>We will remind you, Please tell us the time 🕑</Text>

        {/* Use DatePicker component with mode 'datetime' for both date and time */}
        <DatePicker
          date={this.state.selectedDate}
          mode="datetime"
          onDateChange={(date) => {
            this.setState({ selectedDate: date });
          }}
        />

        <TouchableOpacity
          onPress={() => {
            this.schedulePushNotification(this.state.selectedDate);
          }}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
