"use client";

import React, { useEffect, useState } from "react";
// import Link from "next/link";
import { Link } from "@/i18n/routing";
import MobileNav from "../../home/navHeader/NavHeader";

import { RiMenu5Line } from "react-icons/ri";

import { CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

import logo from "@/assets/header/website-logo.svg";
import Image from "next/image";

import { useTranslations } from "next-intl";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter } from "@/i18n/routing";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("");

    const t = useTranslations("Header");

    const router = useRouter();

    const changeRoute = (path: string) => {
        router.push(path);

        setCurrentLang(path);
        document.cookie = `NEXT_LOCALE=${path}`;
    };

    useEffect(() => {
        const cookies = document.cookie.split("; ");
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split("=");
            if (cookieName === "NEXT_LOCALE") {
                setCurrentLang(cookieValue);
            }
        }
    }, []);

    return (
        <header className={`header__container bg-[#F8F8F8] px-4`}>
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
            <div
                className={`header wrapper flex justify-between items-center py-5 h-[4.6rem] duration-200 z-10 inset-[0_0_auto_0]`}>
                <div className="header__logo">
                    <Link href={"/"}>
                        <Image src={logo} alt="website logo" priority={true} />
                    </Link>
                </div>
                <nav className="header__nav hidden lg:flex gap-x-[75px] font-light">
                    <Link href={"/"}>{t("home")}</Link>
                    <button disabled>{t("shop")}</button>
                    <button disabled>{t("contact")}</button>
                    <button disabled>{t("blog")}</button>
                </nav>
                <div className="header__contact flex items-center justify-center gap-6 text-2xl">
                    <CiUser />
                    <IoSearchOutline />
                    <FaRegHeart />
                    <IoCartOutline />
                    <Select
                        onValueChange={(e) => changeRoute(e)}
                        value={currentLang}>
                        <SelectTrigger className="w-fit">
                            <SelectValue placeholder={currentLang} />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup
                                onChange={(e) => console.log(e.target)}>
                                <SelectLabel>{t("Languages")}</SelectLabel>
                                <SelectItem value="uz">
                                    <div className="flex items-center justify-center w-full gap-4">
                                        <img
                                            className="max-w-4"
                                            src="https://cdn-icons-png.flaticon.com/512/197/197416.png"
                                            alt=""
                                        />
                                    </div>
                                </SelectItem>
                                <SelectItem value="en">
                                    <div className="flex items-center justify-center w-full gap-4">
                                        <img
                                            className="max-w-4"
                                            src="https://cdn-icons-png.flaticon.com/512/555/555526.png"
                                            alt=""
                                        />
                                    </div>
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <RiMenu5Line
                        className="lg:hidden text-3xl"
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
