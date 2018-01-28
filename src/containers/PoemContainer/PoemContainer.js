import React, { Component } from 'react'

import PoemCard from '../../components/PoemCard/PoemCard'
import Modal from '../../components/Modal/Modal'
import Poem from '../../components/Poem/Poem'

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
      ],
      displayPoem: false,
      poem: {}
    }

    this.showModalWithPoem = this.showModalWithPoem.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModalWithPoem(poemTitle, event) {
    event.stopPropagation()
    const poem = this.state.poems.filter(poem => poem.title === poemTitle)[0]
    this.setState({ displayPoem: true, poem})
  }

  hideModal() {
    this.setState(prevState => ({ displayPoem: !prevState.displayPoem, poem: {} }))
  }

  render() {
    const showModal = this.state.displayPoem
    ? createPoemModal(this.state.poem)
    : null

    return (
      <div onClick={ this.hideModal }>
        { showModal }
        { createPoemList(this.state.poems, this.showModalWithPoem) }
      </div>
    )
  }
}

const createPoemList = (poems, showModalWithPoem) => {
  return poems.map(poem =>
    <PoemCard
      title={ poem.title }
      body={ poem.body }
      key={ poem.title }
      showModalWithPoem={ showModalWithPoem }
    />
  )
}

const createPoemModal = (poem) => {
  return (
    <Modal>
      <Poem poem={ poem } />
    </Modal>
  )
}
