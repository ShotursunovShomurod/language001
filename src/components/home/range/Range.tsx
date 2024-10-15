"use client";
import React from "react";

import img1 from "@/assets/home-1/categories/c-1.png";
import img2 from "@/assets/home-1/categories/c-2.png";
import img3 from "@/assets/home-1/categories/c-3.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Range = () => {
    const t = useTranslations("HomePage.section2");

    return (
        <section className="wrapper range">
            <div className="max-w-[1320px] px-5">
                <div className="range__info text-center my-12">
                    <h3 className="text-2xl font-bold">{t("h1")}</h3>
                    <p className="text-[#666666]">{t("p1")}</p>
                </div>
                <div className="ranges flex items-center justify-between text-center font-semibold gap-4 overflow-x-auto">
                    <div className="ranges--item max-w-[24rem] grid gap-5 flex-shrink-0 flex-grow">
                        <Image src={img1} alt="category-img" />
                        <p>{t("p2")}</p>
                    </div>
                    <div className="ranges--item max-w-[24rem] grid gap-5 flex-shrink-0 flex-grow">
                        <Image src={img2} alt="category-img" />
                        <p>{t("p2")}</p>
                    </div>
                    <div className="ranges--item max-w-[24rem] grid gap-5 flex-shrink-0 flex-grow">
                        <Image src={img3} alt="category-img" />
                        <p>{t("p3")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Range;
