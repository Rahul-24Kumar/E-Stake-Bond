'use client';
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-16 shadow-xl bg-gradient-to-r from-gray-700 via-gray-500 to-purple-400 z-50">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image src="/images/logo.png" alt="logo" width="205" height="75"
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div className="hidden sm:flex">
                    <ul className="flex space-x-10">
                        <Link href="/">
                            <li className="hover:text-yellow-400 text-xl transition duration-200">Home</li>
                        </Link>
                        <Link href="#projects">
                            <li className="hover:text-yellow-400 text-xl transition duration-200">Project</li>
                        </Link>
                        <Link href="#about">
                            <li className="hover:text-yellow-400 text-xl transition duration-200">About</li>
                        </Link>
                        
                        <Link href="#contact">
                            <li className="hover:text-yellow-400 text-xl transition duration-200">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer p-1">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            <div className={
                menuOpen
                    ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gradient-to-br from-green-400 to-yellow-400 p-10 ease-in-out duration-500 z-50"
                    : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
            >
                <div className="flex w-full justify-end items-center">
                    <div onClick={handleNav} className="cursor-pointer p-1">
                        <AiOutlineClose size={25} />
                    </div>
                </div>

                <div className="flex-col py-4">
                    <ul>
                        <Link href="/">
                            <li className="py-4 cursor-pointer hover:text-yellow-400 transition duration-200">Home</li>
                        </Link>
                        <Link href="/about">
                            <li className="py-4 cursor-pointer hover:text-yellow-400 transition duration-200">About</li>
                        </Link>
                        <Link href="/project">
                            <li className="py-4 cursor-pointer hover:text-yellow-400 transition duration-200">Project</li>
                        </Link>
                        <Link href="/contact">
                            <li className="py-4 cursor-pointer hover:text-yellow-400 transition duration-200">Contact</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer hover:text-pink-500 transition duration-200" />
                    <AiOutlineFacebook size={30} className="cursor-pointer hover:text-blue-700 transition duration-200" />
                    <AiOutlineTwitter size={30} className="cursor-pointer hover:text-blue-400 transition duration-200" />
                </div>
            </div>
        </nav>
    )
}

export default Nav;
