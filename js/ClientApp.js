var MyFrirstComponent=React.createClass({
  render:function(){
    return(
      React.DOM.div(null,
        React.DOM.h1(null,"This is my first component")
      )
    );
  }
});

ReactDOM.render(React.createElement(MyFrirstComponent),document.getElementById('app'));
