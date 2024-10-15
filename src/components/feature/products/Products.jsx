import React from "react";

import { error } from "console";
import Product from "../product/Product";

import { getTranslations } from "next-intl/server";

const Products = async () => {
    const t = await getTranslations("HomePage.section3");

    async function fetchApi() {
        const response = await fetch(
            "https://api.jsonbin.io/v3/b/67024f68acd3cb34a8920fb3",
            {
                headers: {
                    "X-Master-Key":
                        "$2a$10$.vg2bZmuax/qqiu9DJyk.uwTjcLnUITl8AW/avzdSi8vzDTQb61da",
                    "X-JSON-Path": "$..products[:8]",
                },
            }
        );

        if (!response.ok) {
            throw error("Something went swront");
        }

        return await response.json();
    }

    const data = await fetchApi();

    return (
        <section className="wrapper my-10 grid gap-5">
            <div className="products__info text-center">
                <h2 className="font-semibold text-2xl">{t("h1")}</h2>
            </div>
            <Product data={data} />
            <button className="border border-[#B88E2F] hover:bg-[#B88E2F] rounded-xl hover:text-white duration-300 text-sm text-[#B88E2F] py-3 px-11 font-semibold mx-auto w-fit ">
                {t("btn")}
            </button>
        </section>
    );
};

export default Products;
