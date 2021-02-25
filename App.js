import React, { Component } from 'react'

import './App.css'

const listImage = [
  {
    title: 'Anh1',
    src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-1/c4.0.320.320a/p320x320/84569222_491709528423703_801483636653162496_n.jpg?_nc_cat=105&ccb=3&_nc_sid=7206a8&_nc_ohc=IyNTkraaiTwAX_ojFqW&_nc_ht=scontent-hkt1-1.xx&tp=27&oh=47840364a988da2cf7f44184d2f4162b&oe=6051DFA5'
  },
  {
    title: 'Anh2',
    src: 'https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/37561261_107681010159892_8940278050747056128_n.jpg?_nc_cat=108&ccb=3&_nc_sid=e3f864&_nc_ohc=leAFctC_y98AX8mvFc9&_nc_ht=scontent.fdad3-3.fna&oh=c4de4098ec96e41d9b8a76f15ef8ad5c&oe=604F5444'
  },
  {
    title: 'Anh3',
    src: 'https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/74880648_420593308868659_248846818832547840_n.jpg?_nc_cat=104&ccb=3&_nc_sid=174925&_nc_ohc=_l6YKpbCQ_YAX-DO7kE&_nc_ht=scontent.fdad3-2.fna&oh=dfac7facd05196a059468a9622f339c2&oe=604F867E'
  },
  {
    title: 'Anh4',
    src: 'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/119740522_647943102800344_6372624069252452042_n.jpg?_nc_cat=103&ccb=3&_nc_sid=174925&_nc_ohc=XbUWYlbKt2sAX-gSPf9&_nc_ht=scontent-hkt1-1.xx&oh=a448a6dc20ccd2004f8694b1c9b2e668&oe=60504547'
  }
]

let timeout
export default class SlideShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
  }
  componentDidUpdate() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState(oldState => ({
        index: oldState.index + 1 >= listImage.length ? 0 : oldState.index + 1
      }))
    }, 5000)
  }
  componentDidMount() {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      this.setState(oldState => ({
        index: oldState.index + 1 >= listImage.length ? 0 : oldState.index + 1
      }))
    }, 5000)
  }
  handleNextClick = () => {
    if (timeout) clearTimeout(timeout)
    this.setState(oldState => ({
      index: oldState.index + 1 >= listImage.length ? 0 : oldState.index + 1
    }))
  }

  handlePreClick = () => {
    if (timeout) clearTimeout(timeout)
    this.setState(oldState => ({
      index: oldState.index - 1 < 0 ? listImage.length - 1 : oldState.index - 1
    }))
  }

  render() {
    return (
      <div className='lp-slideshow-gallery'>
        <div className='container'>
          <button className='action-button pre' onClick={this.handlePreClick}>&#10094;</button>
          <button className='action-button next' onClick={this.handleNextClick}>&#10095;</button>
          {listImage.map((item, idx) => (
            <div
              key={idx}
              className={
                `slide ${idx === this.state.index ? 'active' : ''}`
              }
            >
              <div className='number-text'>
                {`${this.state.index + 1} / ${listImage.length}`}
              </div>
              <img alt={item.title} src={item.src} className='image' />
              <div className='caption-text'>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}