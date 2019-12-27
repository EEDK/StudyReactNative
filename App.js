import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "f7e0f0937f2e643f67b4e2d03183e562";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeater = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    )
    console.log(data);
  }
  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {
         coords : {latitude, longitude} 
        } = await Location.getCurrentPositionAsync();
        this.getWeater(latitude, longitude);
        this.setState({isLoading: false})
    } catch(error){
        Alert.alert("can't fine you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state
    return isLoading ?  <Loading /> : null;
  }
}