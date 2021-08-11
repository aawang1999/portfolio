import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiMenu, BiX } from 'react-icons/bi'
import { navbar } from '../data/navbar'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  //eslint-disable-next-line
  const [links, setLinks] = useState(navbar)

  return (
    <>
      <div className="menu-btn">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>
      <header className={`${isOpen ? "header open" : "header"}`}>
        <nav>
          <ul>
            {links.map(({ id, url, title }) => {
              return (
                <li key={id} onClick={() => setIsOpen(false)}>
                  <Link to={url}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Menu