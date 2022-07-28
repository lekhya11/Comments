import {Component} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

/*
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
*/

class Comments extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="comments-container">
          <div>
            <h1 className="heading">Comments</h1>
            <p className="paragraph">Say something about 4.0 Technologies</p>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="Input-area"
              />
              <textarea
                rows="5"
                cols="50"
                className="Comments-area"
                placeholder="Your Comment"
              />
            </form>
            <button className="Add-button" type="button">
              Add Comment
            </button>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="comments-list">
          <div className="count-comments">
            <button className="count-button" type="button">
              <p className="count">0</p>
            </button>
            <p className="comments">Comments</p>
          </div>
          <ul className="list">
            <CommentItem />
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
