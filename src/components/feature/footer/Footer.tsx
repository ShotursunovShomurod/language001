import { getTranslations } from "next-intl/server";

const Footer = async () => {
    const t = await getTranslations("Footer");
    return (
        <footer className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="font-bold text-2xl mb-4">{t("h1")}</h2>
                        <p className="text-gray-500">
                            {t("p1.first")}
                            <br />
                            {t("p1.second")}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-600 mb-10">
                            {t("h2")}
                        </h3>
                        <ul className="space-y-6">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("home")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("shop")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("about")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("contact")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-600 mb-10">
                            Help
                        </h3>
                        <ul className="space-y-6">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("a1")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("a2")}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-600 hover:text-black">
                                    {t("a3")}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-600 mb-4">
                            {t("h3")}
                        </h3>
                        <form className="flex space-x-2">
                            <input
                                type="email"
                                className="border-b bg-transparent border-black px-4 py-2 w-full"
                                placeholder={t("placeholder")}
                            />
                            <button
                                type="submit"
                                className="text-black border-b border-black px-4 py-2 hover:bg-gray-800">
                                {t("btn")}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-300 pt-6 text-gray-500 text-sm">
                    <p>{t("p2")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
