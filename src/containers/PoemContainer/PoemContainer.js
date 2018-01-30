import React, { Component } from 'react'
import { connect } from 'react-redux'

import PoemCard from '../../components/PoemCard/PoemCard'
import Modal from '../../components/Modal/Modal'
import Poem from '../../components/Poem/Poem'

import { fetchPoemsRequest } from '../../actions'

class PoemContainer extends Component {
  constructor(props) {
    super(props)

    /* Connecting to Ethereum Ropsten Testnet */
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider)
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/'))
    }

    const contractAddress = '0xd9cfed2e33b484201677a40fe6ffc497424da931'
    const contractABI = [ { "constant": true, "inputs": [ { "name": "number", "type": "uint256" } ], "name": "getPoem", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "number", "type": "uint256" }, { "name": "newPoem", "type": "string" } ], "name": "editPoem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "poem", "type": "string" } ], "name": "setPoem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" } ]

    const MyContract = web3.eth.contract(contractABI)

    // consider moving displayPoem and poem to redux state
    this.state = {
      displayPoem: false,
      poem: {},
      ContractInstance: MyContract.at(contractAddress)
    }

    this.showModalWithPoem = this.showModalWithPoem.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  componentDidMount() {
    this.props.fetchPoemsRequest(this.state.ContractInstance.getPoem)
  }

  showModalWithPoem(poemTitle, event) {
    event.stopPropagation()
    const poem = this.props.poems.filter(poem => poem.title === poemTitle)[0]
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
        { createPoemList(this.props.poems, this.showModalWithPoem) }
      </div>
    )
  }
}

function mapStateToProps({ poems }) {
  return { poems }
}

export default connect(mapStateToProps, { fetchPoemsRequest })(PoemContainer)

const createPoemList = (poems, showModalWithPoem) => {
  if (poems.length === 0)
    return <h1> Loading poetry from the Ethereum Blockchain... </h1>

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
