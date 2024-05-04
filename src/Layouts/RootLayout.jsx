import { Link, Outlet } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import { useState } from "react";
import useWindowSize from "../components/useWindowSize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const RootLayout = () => {
    const [topBarOpen, setTopBarOpen] = useState(false);
    const { width } = useWindowSize();



    return (
        <div className="flex justify-start flex-col h-[100vh]">
            <header className="flex justify-between gap-x-4 flex-row p-5 bg-slate-800 items-center border-b-2">
                <h1 id="title" className="text-yellow-300 font-bold text-3xl font-sans">RECIPE APP</h1>
                <div className="flex flex-row justify-between gap-x-6 items-center">
                    <SearchInput />
                    {width < 600 ?
                        <FontAwesomeIcon icon={faBars}
                            className="text-yellow-400 text-3xl p-3 mb-2 hover:bg-red-600 rounded-sm"
                            onClick={() => setTopBarOpen(!topBarOpen)}
                        /> :
                        <Link
                            to="/"
                            className="text-white p-3 bg-red-500 rounded-sm text-sm font-bold hover:bg-red-700">Home</Link>
                    }

                </div>

            </header>
            {
                topBarOpen &&
                <div className="top-0 left-0 flex justify-start flex-col items-center bg-slate-400 h-[20%] p-5 z-99">
                    <Link
                        to="/"
                        onClick={() => setTopBarOpen(!topBarOpen)}
                        className="hover:bg-yellow-400 w-[100%] text-center">Home</Link>
                    <Link
                        to="recipes"
                        onClick={() => setTopBarOpen(!topBarOpen)}
                        className="hover:bg-yellow-400 w-[100%] text-center">Recipes</Link>
                    <Link class-Name="hover:bg-yellow-400 w-[100%] text-center">Login</Link>
                    <Link className="hover:bg-yellow-400 w-[100%] text-center">Sign Up</Link>
                </div>

            }
            <main className="bg-slate-800 p-2">
                <Outlet />
            </main>
            <footer className="bg-slate-800 flex justify-center gap-x-3 flex-row text-yellow-300 h-[50px] items-center">
                <Link className=" underline hover:no-underline p-2">About Us</Link>
                <Link className="underline hover:no-underline p-2">Contacts</Link>
                <Link className="underline hover:no-underline p-2">Blog</Link>
            </footer>
        </div >
    );
}

export default RootLayout;
