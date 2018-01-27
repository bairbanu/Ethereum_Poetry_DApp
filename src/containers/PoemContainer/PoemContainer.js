import React, { Component } from 'react'

export default class PoemContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      poems: [
        {
          title: 'Test',
          body: 'yes\nwow\n\ntheend',
          author: 'Zz',
          credits: 'You, me, us, them, everyone'
        },
        {
          title: 'Test2',
          body: 'yes\nwow\n\ntheend',
          author: 'Zz',
          credits: 'You, me, us, them, everyone'
        },
        {
          title: 'Test3',
          body: 'yes\nwow\n\ntheend',
          author: 'Zz',
          credits: 'You, me, us, them, everyone'
        },
        {
          title: 'Test4',
          body: 'yes\nwow\n\ntheend',
          author: 'Zz',
          credits: 'You, me, us, them, everyone'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        { this.state.poems.map(poem =>
          <li> { poem.title }</li>
        )}
      </div>
    )
  }
}
