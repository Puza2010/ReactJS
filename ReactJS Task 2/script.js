var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Display default props.');    
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('Render will start now.');    
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Add '),
            React.createElement('button', {onClick: this.decrement}, 'Subtract ')
        );
    },

    componentDidMount: function() {
        console.log('Rendering done.');    
    },

    componentWillReceiveProps: function() {
        console.log('Display new props.');    
    },

    shouldComponentUpdate: function() {
        console.log('True/False');    
        return  true;
    },

    componentDidUpdate: function() {
        console.log('Rendering done.');    
    },

    componentWillUnmount: function() {
        console.log('Discard component.');    
    },

});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter, {}),
        React.createElement(Counter, {})
      )
    );
  }
});

var element = React.createElement(App);
ReactDOM.render(element, document.getElementById('app'));