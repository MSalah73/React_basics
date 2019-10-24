import React, {Component} from "react"
import Navigation from './Navigation'
import Jumbo from './Jumbo'
import Column from './Column'
export default class App extends Component {
  render(){
    let columns = <div className="row">
                    {this.props.information.map( e => <Column title={e.title} infromation={e.desc} />)}
                  </div>;
    return(
      <div className="App">
        <Navigation appTitle={this.props.title}/>
        <Jumbo />
        {columns}
      </div>
      )
  }
} 