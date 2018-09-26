var CounterOne = React.createClass({
    getDefaultProps: function() {
      console.log('Domyœlne propsy');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
      console.log('Pocz¹tkowa konfiguracja');
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
          React.createElement('button', {onClick: this.increment}, "+"),
          React.createElement('span', {}, 'Licznik ' + this.state.counter),
          React.createElement('button', {onClick: this.decrement}, "-"),
        );
    },

    componentDidMount: function() {
      console.log('Wczytanie danych z serwera');
    },

    componentWillReceiveProps: function() {
      console.log('Modyfikacja propsów i ustawianie stanów na ich podstawie');
    },

    shouldComponentUpdate: function() {
      console.log('Sprawdzenie kiedy component powinien siê "odœwie¿yc" ');
      return true;
    },

    componentWillUpdate: function() {
      console.log('Podobnie do componentWillReceiveProps ale bez dostêpu do poprzednich propsów');
    },

    componentDidUpdate: function() {
      console.log('Update DOM w zwi¹zku ze zmian¹ propsów i stanów');
    },

    componentWillUnmount: function() {
      console.log('Czyszczenie niepotrzebnych elementów');
    }

});

var element = React.createElement(CounterOne);
ReactDOM.render(element, document.getElementById('app'));

var elementTwo = React.createElement(CounterOne);
ReactDOM.render(elementTwo, document.getElementById('appTwo'));