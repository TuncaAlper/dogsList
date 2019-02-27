import React, {Component} from 'react'
import DogsBreedImages from './DogsBreedImages'
import request from 'superagent'

export default class DogBreedImagesContainer extends Component {
  state = { images: null, params: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    this.setState({
      images: images
    })
  }

  render() {
    return (
    <DogsBreedImages match={this.props.match} images={ this.state.images } />
    )
  }
}