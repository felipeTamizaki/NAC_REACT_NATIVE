import React, {Component} from 'react';
import { Text, View, Image, FlatList} from 'react-native';

export default class ListUser extends Component{

    constructor(props) {
        super(props);

        this.state = {
           resposta : []
          }
      }
      componentDidMount(){
        this.fetchJSON();
      }

      fetchJSON(){
        fetch("https://reqres.in/api/users?page=1")
        .then(response => response.json())
        .then((item)=> {
          this.setState({
              resposta: item
          })
        })
        .catch(error=>console.log(error))
      } 
        render() {
          return(
            <View>
              <Text>{this.state.email}</Text>
              <Text>{this.state.first_name} {this.state.last_name}</Text>
              <Image source={{uri:this.state.imagem}}
                      style={{width: '100%',
                              height: 250,
                              resizeMode:'contain',
                              justifyContent:'center'}}/>
            </View>
          )
        }
}