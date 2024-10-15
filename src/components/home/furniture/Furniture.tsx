import React from "react";
import img from "@/assets/home-1/Images.png";

import { getTranslations } from "next-intl/server";
const Furniture = async () => {
    const t = await getTranslations("HomePage.section5");

    return (
        <section className="furniture my-10">
            <div className="furniture__info text-center">
                <p className="tracking-wide text-[#616161]">{t("p1")}</p>
                <h3 className="text-4xl font-semibold break-words">
                    #FuniroFurniture
                </h3>
            </div>
            <div
                className="min-h-[40rem] bg-no-repeat bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}></div>
        </section>
    );
};

export default Furniture;
