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
    const {t} = this.props;

    
    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase">Blog List</h1>
      <table className= "table table-hover table-striped">
        <thead>
          <tr>
            <th>{t('blog_id')}</th>
            <th>{t('blog_header')}</th>
            <th>{t('blog_content')}</th>
            <th>{t('date')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>item 1</td>
            <td>item 2</td>
            <td>item 3</td>
            <td>item 4</td>
          </tr>
        </tbody>
      </table>
      </React.Fragment>
    )
  }
}


export default withTranslation()(BlogList);