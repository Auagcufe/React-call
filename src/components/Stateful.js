import React from 'react';
import Hello from './Hello';
import axios from 'axios';

class Stateful extends React.Component{
    constructor(props){
        super(props);
        this.state={
            people: [],
            posts: []
        }
    }
    // componentWillUnmount(){
    //     console.log('Will Die')
    // }
    addPerson(o){
        var list=this.state.people
        list.push(o)
        this.setState({
            people: list
        })
    }
    render(){
        var people=this.state.people//array
        return <div>
            {people.map(function(item){
                return <Hello key={item.id} name={item.name} language={item.language} />
            })}
        </div>
    }
    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            //handle success
            var data = response.data

            console.log(data);
          })
        .catch(function (error) {
            //handle error
            console.log(error);
          });

        this.addPerson({id:68926, name:"Steven", language:'cn'})
        this.addPerson({id:8926, name:"Bill", language:'cn'})
        this.addPerson({id:6892, name:"Louis", language:'cn'})
        this.addPerson({id:6896, name:"Amy", language:'cn'})
        this.addPerson({id:68924, name:"Micheal", language:'cn'})
    }
}

export default Stateful

var yyy = x => <h4>{x.name}</h4>