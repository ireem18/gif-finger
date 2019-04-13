import React,{Component} from 'react';

import Header from './Header';
import Footer from './Footer';
import NotFound from './Notfound';
import Search from './Search';
import Gifs from './Gifs';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchTerm: '',
      gifs:[]
    };
    this.handleTerm = this.handleTerm.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount(){
    this.getTrendGifs();
  }
  getTrendGifs(){
    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=36Jv71w7S7AqytIkNgYxVH6ztaKSRCYS&limit=12&rating=G`
    )
      .then(res =>res.json())
      .then(data => this.setState({gifs:data.data}))
      .catch(err => console.error(err));
  }

  handleTerm(e){
    this.setState({
      searchTerm:e.target.value
    });
  }

  handleSearch(e){
    e.preventDefault();

    const {searchTerm}=this.setState;

    fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=36Jv71w7S7AqytIkNgYxVH6ztaKSRCYS=${searchTerm}&limit=12`
    )
      .then(res => res.json())
      .then(data => this.setState({ gifs: data.data }))
      .catch(err => console.error(err));

      this.setState({searchTerm:''});
  }
  render(){
    const {gifs,searchTerm}=this.state;
    return (
      <>
      <Header />
      <Search 
        searchTerm={searchTerm}
        onSearch={this.handleSearch}
        onTerm={this.handleTerm} />
        {searchTerm !==''&& (
          <div className="has-text-centered" style={{marginBottom:'25px'}}>
            <h2 className="title is-2">
              Press Enter!{' '}
              <span role="img" aria-label="trust me">
              
              </span>
            </h2>
          </div>
        )}
        {gifs.length !== 0 ? <Gifs gifs={gifs} />:<NotFound />}
      <Footer />
      </>
    );
  }




}


export default App;