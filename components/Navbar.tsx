import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useRouter } from "next/router";

interface item {
    title: string
    href: string
}

const DEFAULTLINKS: item[] = [
    {
        title: "Workout Guru",
        href: "/"
    },
    {
        title: "About",
        href: "/about"
    }
];

const LOGGEDINLINKS: item[] = [
    ...DEFAULTLINKS,
    {
        title: "Routine",
        href: "/routine"
    },
    {
        title: "Profile",
        href: "/profile"
    }
];

const Navbar = () => {
    const { user } = useUser();
    const router = useRouter();

    return (
        <header>
            {user && (
                <nav>
                    {LOGGEDINLINKS.map((item) => (
                        <Link href={item.href} key={item.title}>
                            <div className={`nav-item${router.pathname == item.href ? "-active": ""}`}>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                    <Link href="/api/auth/logout">
                        <div className="nav-item-right">
                            Logout
                        </div>
                    </Link>
                </nav>
            )} 
            {!user && (
                <nav>
                    {DEFAULTLINKS.map((item) => (
                        <Link href={item.href} key={item.title}>
                            <div className={`nav-item${router.pathname == item.href ? "-active": ""}`}>
                                {item.title}
                            </div>
                        </Link>
                    ))}
                    <Link href="/api/auth/login">
                        <div className="nav-item-right">
                            Login
                        </div>
                    </Link>
                </nav>
            )}
        </header>
    );
};

export default Navbar;