var CounterOne = React.createClass({
    getDefaultProps: function() {
      console.log('Domy�lne propsy');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
      console.log('Pocz�tkowa konfiguracja');
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
      console.log('Modyfikacja props�w i ustawianie stan�w na ich podstawie');
    },

    shouldComponentUpdate: function() {
      console.log('Sprawdzenie kiedy component powinien si� "od�wie�yc" ');
      return true;
    },

    componentWillUpdate: function() {
      console.log('Podobnie do componentWillReceiveProps ale bez dost�pu do poprzednich props�w');
    },

    componentDidUpdate: function() {
      console.log('Update DOM w zwi�zku ze zmian� props�w i stan�w');
    },

    componentWillUnmount: function() {
      console.log('Czyszczenie niepotrzebnych element�w');
    }

});

var element = React.createElement(CounterOne);
ReactDOM.render(element, document.getElementById('app'));

var elementTwo = React.createElement(CounterOne);
ReactDOM.render(elementTwo, document.getElementById('appTwo'));