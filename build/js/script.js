var myApp = {};

myApp.Something = React.createClass({

  getInitialState: function(){
    return {
      username: '',
      repository: ''
    }
  },

  setUserName: function(event){
    this.setState({
      username: event.target.value
    });
  },

  setRepository: function(event){
   this.setState({ repository: event.target.value })
  },

  render: function(){
    console.log(this.state)
    return(
      <span>
        <input type="text" name="username" onChange={this.setUserName}/>
        <input type="text" name="repository" onChange={this.setRepository}/>
      </span>
    );
  }
});

React.render(<myApp.Something/>, document.getElementById('content'))
