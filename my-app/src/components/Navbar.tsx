import Link from "next/link";

export default function Navbar() {
    return <div id="navbar">
        <ul className="flex justify-evenly py-4">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/about/profile">Profile</Link>
            </li>
            <li>Contact Us</li>
        </ul>
    </div>
}