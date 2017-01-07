class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
        {console.log('cool :',cool)}
          <VideoPlayer video={this}/>          
        }
        </div>
        <div className="col-md-5">
          <VideoList/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;