import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdMenuOpen} from 'react-icons/md'
import './index.css'

class Header extends Component {
  state = {showMenu: false, currentPath: ''}

  render() {
    return <h1>This is a Header component</h1>
  }
}

export default Header
