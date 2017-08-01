import React from 'react';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import StarIcon from 'material-ui/svg-icons/toggle/star';

import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

class App extends React.Component {

  constructor() {
    super();
    this.styles = {
      backgroundColor: "#000"
    };
  }

  getChildContext(){
    return {
      muiTheme: getMuiTheme()
    };
  }

  render() {
    return (

      <div>
        
       {/* Header */}
        <AppBar
          style={this.styles}
          iconElementLeft={<IconButton><StarIcon /></IconButton>}
          title="Todo list"
          />

        {/* Body */}
        <div>
          <NewTodo />
          <Todos />
        </div>

        {/* Footer */}
        {/* todo */}

      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;