import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewid: 0}

  onClickLeft = () => {
    const {reviewid} = this.state
    let newReviewId = reviewid
    newReviewId -= 1
    if (newReviewId >= 0) this.setState({reviewid: newReviewId})
  }

  onClickRight = () => {
    const {reviewid} = this.state
    let newReviewId = reviewid
    newReviewId += 1
    if (newReviewId < 4) this.setState({reviewid: newReviewId})
  }

  render() {
    const {reviewsList} = this.props
    const {reviewid} = this.state
    const review = reviewsList[reviewid]
    const {imgUrl} = review
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-list-container">
          <img src={imgUrl} alt={review.username} className="image" />
          <div className="buttons-container">
            <button
              className="arrow"
              data-testid="leftArrow"
              type="button"
              onClick={this.onClickLeft}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="name">{review.username}</p>
            <button
              className="arrow"
              data-testid="rightArrow"
              type="button"
              onClick={this.onClickRight}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="review-text">{review.companyName}</p>
          <p className="review-text">{review.description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
