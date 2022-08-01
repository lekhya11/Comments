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
        <div className="comment-con">
          <div className="comments">
            <h1 className="heading">Comments</h1>
            <p className="description"> Say something about 4.0 Technologies</p>
            <input type="text" className="comm-input" />
            <textarea className="text-area" rows="9" cols="50" />
            <button type="button" className="button">
              Add Comment
            </button>
          </div>
          <div className="comments-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comm-image"
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div>
          <p>value</p>{' '}
        </div>
      </div>
    )
  }
}

export default Comments
