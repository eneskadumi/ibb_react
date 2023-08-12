import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import BlogApi from '../../services/BlogApi';

// CLASS
class BlogList extends Component {

  // componentteki isim datası
  static displayName = "Blog_List"

  constructor(props) {
    super(props);

    // STATE
    this.state = {
      bloglist: []
    };
    // BIND

  }

  // CDM
  componentDidMount() {
    // const url='https://jsonplaceholder.typicode.com/posts';
    BlogApi.blogServiceList()
      .then((response) => {
        console.log(response);
        this.setState({
          bloglist: response.data
        })
      })

      .catch((err) => {
        console.log('Error:', err)
      });

  }// END CDM

  // FUNCTION


  render() {
    return (
      <div>BlogList</div>
    )
  }
}


export default withTranslation()(BlogList);