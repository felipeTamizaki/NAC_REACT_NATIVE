import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';

export default class user extends Component{
    constructor(props) {
        super(props);
  
        this.state = {
          first_name: '',
          last_name: '',
        };
    }
  
    componentDidMount(){
      this.fetchJSON();
  
    }
  
    fetchJSON(){
      fetch("https://reqres.in/api/users/1")
      .then(response => response.json())
      .then((item)=> {
  
        var first_name = item['data']['first_name']
        var last_name = item['data']['last_name']
  
        this.setState({first_name: first_name,
                    last_name: last_name,})
  
      })
      .catch(error=>console.log(error))
    }
    render (){
        return(
            <View>
                <text>Id Usuario: </text>
                <text>Email: </text>
                <text>Nome: </text>
                <text>Sobrenome: </text>
            </View>
        )
    }
}