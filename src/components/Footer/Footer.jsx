import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (


        <footer className="bg-white dark:bg-gray-900 mt-auto">
            <div className="mx-auto w-full max-w-screen-3xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">COMPANY</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                👋 Welcome to R.K Blogs , where we share insights, stories, and tips on Health, Job, Education, Tech, Sports. Our mission is to inspire, inform, and engage our readers with high-quality content. Join us on this journey and stay updated with our latest posts.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Topices</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to={"/articles/health"} href="#" className=" hover:underline">Health</Link>
                            </li>
                            <li className="mb-4">
                                <Link to={"/articles/education"} href="#" className="hover:underline">Education</Link>
                            </li>
                            <li className="mb-4">
                                <Link to={"/articles/tech"} href="#" className="hover:underline">Tech</Link>
                            </li>
                            <li className="mb-4">
                                <Link to={"/articles/job"} href="#" className="hover:underline">Job</Link>
                            </li>
                            <li className="mb-4">
                                <Link to={"/articles/all"} href="#" className="hover:underline">Random</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to={"https://x.com/imramesh78?t=TmnFD8Mxbu-Iv-emT24g2g&s=08"} className="hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-800 dark:text-white" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" xml:space="preserve"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" /></svg>
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to={"https://youtube.com/@rameshkumar55458?si=dhgvR5E6whnFXLBt"} className="hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube w-6 h-6 text-gray-800 dark:text-white" viewBox="0 0 16 16">
                                        <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                                    </svg>

                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to={"https://t.me/ramesh5545"} className=" hover:underline">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram w-6 h-6 text-gray-800 dark:text-white" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                    </svg>

                                </Link>
                            </li>
                        
                            <li className="mb-4">
                                <Link to={"https://www.instagram.com/mr___ramesh_5545/"} className=" hover:underline">
                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                                    </svg>

                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center py-4">
                    <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2024 <Link to={"/"}>R.K Blogs™</Link>. All Rights Reserved.
                    </span>

                </div>
            </div>
        </footer>

    )
}

export default Footer
