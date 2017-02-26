class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      currVideo: null
    };
  }


  componentDidMount() {
    this.getYouTubeVideos('react tutorials');
  }

  getYouTubeVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };
    this.props.searchYouTube(options, (videos) =>
      this.setState({
        videos: videos,
        currVideo: videos[0]
      })
    );
  }

  onTitleClick(video) {

    this.setState({
      currVideo: video
    });
  }

  render() {
    return (
    <div>
    <Nav handleSearchInputChange={this.getYouTubeVideos.bind(this)}/>
    <div className="col-md-7">
      <VideoPlayer video={this.state.currVideo}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={this.state.videos} onClickFunction={this.onTitleClick.bind(this)}/>
    </div>
  </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
