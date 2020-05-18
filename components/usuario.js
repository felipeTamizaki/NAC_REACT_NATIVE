import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';

export default class user extends Component{
    constructor(props) {
        super(props);
  
        this.state = {
          id: 0,
          email: '',
          first_name: '',
          last_name: '',
          imagem: ''
        };
    }
  
    componentDidMount(){
      this.fetchJSON();
    }
  
    fetchJSON(){
      fetch("https://reqres.in/api/users/1")
      .then(response => response.json())
      .then((item)=> {
  
        var id = item['data']['id']
        var email = item['data']['email']
        var first_name = item['data']['first_name']
        var last_name = item['data']['last_name']
        var image = item['data']['avatar']

        this.setState({
            id : id,
            email : email,
            first_name: first_name,
            last_name: last_name,
            image : image
        })
  
      })
      .catch(error=>console.log(error))
    }
    render (){
        return(
            <View>
                <text>{this.state.id}</text>
                <text>{this.state.email}</text>
                <text>{this.state.first_name} {this.state.last_name}</text>
                <Image source={{uri:this.state.imagem}}
                        style={{width: '100%',
                                height: 250,
                                resizeMode:'contain',
                                justifyContent:'center'}}/>
            </View>
        )
    }
}