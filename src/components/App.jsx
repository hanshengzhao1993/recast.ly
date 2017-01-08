class App extends React.Component {
  constructor(props) {
    super(props);
    var k = props.searchYouTube();
    this.state = {currentVideo : fakeVideoData[0],
                  videos : fakeVideoData};
  }

  onTitleClick(clickedVideo) {
    this.setState({ currentVideo : clickedVideo});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoList videos = {this.state.videos} onTitleClick= {this.onTitleClick.bind(this)}/>
        }
        }
        </div>
        <div className="col-md-5">
          <VideoPlayer video = {this.state.currentVideo}/>          
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;