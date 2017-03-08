var MyTitleFactory = React.createFactory(MyTitle)

var MyFrirstComponent = React.createClass({
  render: function () {
    return (
            div(null,
                MyTitleFactory({
                  title: 'props are the best', color: 'peru'
                }),
                MyTitleFactory({
                  title: 'ahmad samaha', color: 'red'
                }),
                MyTitleFactory({
                  title: 'i love it', color: 'green'
                }),
                MyTitleFactory({
                  title: 'im out of idea', color: 'pink'
                })
            )
    )
  }
})

ReactDOM.render(React.createElement(MyFrirstComponent), document.getElementById('app'))
