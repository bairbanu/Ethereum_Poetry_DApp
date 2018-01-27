import React, { Component } from 'react'

import PoemCard from '../../components/PoemCard/PoemCard'
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
          body: 'yes<br>wow<br><br>theend',
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
          <PoemCard title={ poem.title } body={ poem.body } key={ poem.title }/>
        )}
      </div>
    )
  }
}
