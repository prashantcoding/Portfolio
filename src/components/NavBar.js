import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from 'react-social-icons';
import ReacB from 'react'

const NavBar = () => {
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between ">
                <nav className="flex">
                    <NavLink to="/" exact
                        activeClassName="text-white"
                        className="inline-flex item-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Prashant
                    </NavLink>
                    <NavLink to="/allpost" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        BlogPosts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        Project
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-red-100 bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://twitter.com/Prashan04921847" className="mr-4" traget="_blank" fgColor="#fff" style={{ height: 35, width: 45 }} />
                    <SocialIcon url="https://www.instagram.com/prashant.goswami.543908/" className="mr-4" traget="_blank" fgColor="#fff" style={{ height: 35, width: 45 }} />
                    <SocialIcon url="https://www.linkedin.com/in/prashant-goswami-8a7742213/" className="mr-4" traget="_blank" fgColor="#fff" style={{ height: 35, width: 45 }} />

                </div>
            </div>
        </header>
    )
}
export default NavBar