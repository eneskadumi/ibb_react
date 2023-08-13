import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'
import BlogApi from '../../services/BlogApi';
import { Link } from 'react-router-dom';

// CLASS
class BlogList extends Component {

  // componentteki isim datası
  static displayName = "Blog_List"

  constructor(props) {
    super(props);

    // STATE
    this.state = {
      blogList: [],
    };


    // BIND

    this.update = this.update.bind(this);
    this.view = this.view.bind(this);
    this.delete = this.delete.bind(this);




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

  //UPDATE
  update(id) {
    // alert(id);
  }

  //DElETE
  delete(id) {
    // alert(id);

    BlogApi.blogServiceDeleteId(id)
      .then((response) => {
        this.setState({
          blogList: this.state.bloglist.filter((temp_filter) => temp_filter.id != id)
        })
      })
      .catch((err) => {
        alert("Veri silmede bir hata var");
      });

  }

  //VİEW
  view(id) {
    // alert(id);
  }



  // RENDER
  render() {
    const { t } = this.props;
    const { blogList } = this.state

    return (
      <React.Fragment>
        <h1 className="text-center display-4 text-uppercase mt-5">Blog List</h1>
        <Link to="/blog/create" className="btn btn-primary"><i class="fa-solid fa-plus"></i> {t('blog_create')}</Link>
        <button className="btn btn-danger ms-2"><i class="fa-solid fa-trash"></i> Blog All Delete</button>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>{t('blog_id')}</th>
              <th>{t('blog_header')}</th>
              <th>{t('blog_content')}</th>
              <th>{t('date')}</th>
              <th>{t('update')}</th>
              <th>{t('view')}</th>
              <th>{t('delete')}</th>
            </tr>
          </thead>
          <tbody>


            {
              blogList.map((temp) =>
                <tr key={temp.id}>
                  <td>{temp.id}</td>
                  <td>{temp.header}</td>
                  <td>{temp.content}</td>
                  <td>{temp.date}</td>
                  <td>
                    <i class="fa-solid fa-pen-to-square"
                      style={{ "cursor": "pointer" }}
                      onClick={() => this.update(temp.id)}></i>
                  </td>
                  <td>
                    <i class="fa-solid fa-eye"
                      style={{ "cursor": "pointer" }}
                      onClick={this.view(temp.id)}></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-trash text-danger"
                      style={{ "cursor": "pointer" }}
                      onClick={() => {
                        if (window.confirm("Are you sure to delete")) {
                          this.delete(temp.id);
                        }
                        else
                          window.alert("silinmedi")
                      }}></i>
                  </td>
                </tr>
              )
            }

          </tbody>
        </table>
      </React.Fragment>
    )
  }
}// end loop map


export default withTranslation()(BlogList);