import React from "react";

import img1 from "@/assets/home-1/inspirition/i-1.png";
import Image from "next/image";

import { getTranslations } from "next-intl/server";

const Inspirations = async () => {
    const t = await getTranslations("HomePage.section4");
    return (
        <div className="bg-gray-50 py-20">
            <div className="container mx-auto max-w-[1320px] flex items-center justify-between flex-col lg:flex-row gap-5">
                <div className="max-w-lg text-center lg:text-start">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        {t("h1")}
                    </h2>
                    <p className="text-gray-600 mb-6">{t("p1")}</p>
                    <button className="bg-yellow-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-700">
                        {t("btn")}
                    </button>
                </div>

                <div className="flex space-x-4 overflow-x-auto">
                    <div className="relative flex-shrink-0 w-full md:w-80 h-96">
                        <Image
                            src={img1}
                            alt="img of home"
                            className="w-full h-full object-contain rounded-lg"
                        />
                        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                            <span className="text-gray-400 text-sm">
                                01 — Bed Room
                            </span>
                            <h3 className="text-lg font-bold text-gray-800">
                                Inner Peace
                            </h3>
                        </div>
                    </div>

                    <div className="relative flex-shrink-0 w-full md:w-80 h-96">
                        <Image
                            src={img1}
                            alt="img of home"
                            className="w-full h-full object-contain rounded-lg"
                        />

                        <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                            <span className="text-gray-400 text-sm">
                                02 — Living Room
                            </span>
                            <h3 className="text-lg font-bold text-gray-800">
                                Calm Serenity
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex justify-center lg:justify-end space-x-4 lg:pr-[10%]">
                <span className="h-3 w-3 bg-yellow-600 rounded-full"></span>
                <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
                <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
            </div>
        </div>
    );
};

export default Inspirations;
