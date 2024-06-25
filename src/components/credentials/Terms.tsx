import Head from "../main/head";
import Footer from "../main/footer";


const Terms: React.FC = () => {
    return (
        <>
            <Head></Head>
            <div className="flex items-center justify-center px-72 py-12">
                <div className="flex flex-col p-16 text-block-2 bg-card1 rounded-[30px] max-md:px-5">
                    <div className="max-md:max-w-full text-heading-2 font-bold font-manrope">Умови використання сайту</div>
                    <div className="mt-12 leading-10 max-md:mt-10 max-md:max-w-full">
                        <span className="text-2xl leading-7">
                            Ласкаво просимо на наш веб-сайт! Використовуючи наш сайт, ви
                            погоджуєтесь з наступними умовами використання. Будь ласка, уважно
                            прочитайте ці умови перед початком використання сайту. Якщо ви не
                            погоджуєтесь з цими умовами, будь ласка, не використовуйте наш сайт.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">1. Загальні положення</span>
                        <br /> <br />
                        <span className="text-xl leading-6">
                            1.1. Ці Умови використання (далі — &quot;Умови&quot;) регулюють
                            використання вами нашого веб-сайту (далі — &quot;Сайт&quot;).{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            1.2. Використання Сайту означає, що ви приймаєте та зобов'язуєтеся
                            дотримуватись цих Умов.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">2. Використання Сайту </span>
                        <br />
                        <span className="text-xl leading-6">
                            2.1. Ви погоджуєтесь використовувати Сайт лише в законних цілях та у
                            спосіб, що не порушує права інших користувачів.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            2.2. Забороняється використовувати Сайт для розповсюдження будь-яких
                            незаконних, шкідливих, образливих, наклепницьких або неприйнятних
                            матеріалів.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            3. Реєстрація та обліковий запис{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            3.1. Для доступу до деяких функцій Сайту може знадобитися реєстрація.
                            Ви зобов'язані надати правдиву та точну інформацію під час реєстрації.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            3.2. Ви несете відповідальність за збереження конфіденційності вашого
                            облікового запису та пароля.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">4. Інтелектуальна власність </span>
                        <br />
                        <span className="text-xl leading-6">
                            4.1. Весь контент, представлений на Сайті, включаючи текст, графіку,
                            логотипи, іконки, зображення, аудіо та відео матеріали, є власністю
                            нашого сайту або ліцензіарів і захищається законами про авторське
                            право.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            4.2. Забороняється використовувати контент Сайту без нашої попередньої
                            письмової згоди.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">5. Відповідальність </span>
                        <br />
                        <span className="text-xl leading-6">
                            5.1. Ми не несемо відповідальності за будь-які прямі, непрямі,
                            випадкові, спеціальні або наслідкові збитки, що виникають у зв'язку з
                            використанням або неможливістю використання Сайту.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            5.2. Ми не гарантуємо безперервну та безпомилкову роботу Сайту.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">6. Зміни до Умов </span>
                        <br />
                        <span className="text-xl leading-6">
                            6.1. Ми залишаємо за собою право в будь-який час вносити зміни до цих
                            Умов. Зміни набирають чинності з моменту їх публікації на Сайті.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            6.2. Продовжуючи використовувати Сайт після внесення змін до Умов, ви
                            погоджуєтесь з новими Умовами.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">7. Політика конфіденційності </span>
                        <br />
                        <span className="text-xl leading-6">
                            7.1. Ваша конфіденційність важлива для нас. Будь-яка інформація, яку
                            ви надаєте через Сайт, підлягає нашій Політиці конфіденційності.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">8. Вирішення спорів </span>
                        <br />
                        <span className="text-xl leading-6">
                            8.1. Усі спори, що виникають у зв'язку з використанням Сайту,
                            вирішуються відповідно до чинного законодавства.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">9. Контакти </span>
                        <br />
                        <span className="text-xl leading-6">
                            9.1. Якщо у вас є будь-які питання або коментарі щодо цих Умов, будь
                            ласка, зв'яжіться з нами за допомогою контактної інформації, вказаної
                            на Сайті.
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            Дата набрання чинності: 10.06.2024
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">10. Застереження </span>
                        <br />
                        <span className="text-xl leading-6">
                            10.1. Використання Сайту здійснюється на ваш власний ризик. Весь
                            контент надається &quot;як є&quot; без жодних гарантій.
                        </span>
                        <br />
                        <br />
                        <span className="text-2xl leading-7">
                            Сподіваємось, що вам сподобається користуватись нашим Slush!
                        </span>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Terms;
