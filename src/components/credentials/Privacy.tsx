import Head from "../main/Head";
import Footer from "../main/Footer";


const Privacy: React.FC = () => {
    return (
        <>
            <Head></Head>
            <div className="flex items-center justify-center px-72 py-12">
                <div className="flex flex-col p-16 text-block-2 bg-card1 rounded-[30px] max-md:px-5">
                    <div className="text-3xl max-md:max-w-full text-heading-2 font-bold font-manrope">
                        Політика конфіденційності
                    </div>
                    <div className="mt-12 text-2xl leading-7 max-md:mt-10 max-md:max-w-full">
                        Ця Політика конфіденційності описує, як ми збираємо, використовуємо,
                        зберігаємо та захищаємо вашу особисту інформацію при використанні нашого
                        веб-сайту (далі — &quot;Сайт&quot;). Використовуючи наш Сайт, ви
                        погоджуєтеся з умовами цієї Політики конфіденційності.
                        <br />
                        <br />
                        <span className="text-xl leading-6">1. Збір інформації </span>
                        <br />
                        <span className="text-xl leading-6">
                            1.1. Ми збираємо інформацію, яку ви надаєте безпосередньо, наприклад,
                            під час реєстрації на Сайті, підписки на нашу розсилку, заповнення
                            форм або спілкування з нами.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            1.2. Ми також можемо збирати інформацію автоматично при використанні
                            вами Сайту, таку як IP-адреса, тип браузера, операційна система,
                            сторінки, які ви відвідуєте, час відвідування та іншу статистичну
                            інформацію.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">2. Використання інформації </span>
                        <br />
                        <span className="text-xl leading-6">
                            2.1. Інформація, яку ми збираємо, використовується для:
                        </span>
                        <ul>
                            <li>
                                <span className="text-xl leading-6">
                                    Надання та вдосконалення наших послуг;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Адміністрування вашого облікового запису;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Відправлення вам оновлень, інформаційних бюлетенів та рекламних
                                    матеріалів;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Відповіді на ваші запити та надання підтримки клієнтам;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Аналізу використання Сайту для покращення нашого контенту та
                                    послуг.
                                </span>
                            </li>
                        </ul>
                        <br />
                        <span className="text-xl leading-6">3. Обмін інформацією </span>
                        <br />
                        <span className="text-xl leading-6">
                            3.1. Ми не продаємо, не передаємо та не розголошуємо вашу особисту
                            інформацію третім особам без вашої згоди, за винятком наступних
                            випадків:
                        </span>
                        <ul>
                            <li>
                                <span className="text-xl leading-6">
                                    З нашими постачальниками послуг, які допомагають нам у роботі
                                    Сайту та наданні послуг;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Якщо це вимагається законодавством або у відповідь на законний
                                    запит урядових органів;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Для захисту наших прав, безпеки та власності або прав, безпеки та
                                    власності інших осіб.
                                </span>
                            </li>
                        </ul>
                        <br />
                        <span className="text-xl leading-6">4. Захист інформації </span>
                        <br />
                        <span className="text-xl leading-6">
                            4.1. Ми вживаємо належних заходів для захисту вашої особистої
                            інформації від несанкціонованого доступу, втрати, використання,
                            розголошення, зміни або знищення.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            4.2. Проте, жоден метод передачі інформації через Інтернет або метод
                            електронного зберігання не є на 100% безпечним. Тому, хоча ми прагнемо
                            використовувати комерційно прийнятні засоби для захисту вашої
                            особистої інформації, ми не можемо гарантувати її абсолютну безпеку.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">5. Файли cookie </span>
                        <br />
                        <span className="text-xl leading-6">
                            5.1. Ми використовуємо файли cookie та інші подібні технології для
                            покращення вашого досвіду на Сайті, аналізу використання Сайту та
                            надання персоналізованого контенту та реклами.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            5.2. Ви можете керувати файлами cookie через налаштування вашого
                            браузера. Відключення файлів cookie може вплинути на ваш досвід
                            використання Сайту.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            6. Посилання на сторонні сайти{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            6.1. Наш Сайт може містити посилання на сторонні сайти, які не
                            управляються нами. Ми не несемо відповідальності за зміст або політику
                            конфіденційності цих сторонніх сайтів.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">7. Права користувачів </span>
                        <br />
                        <span className="text-xl leading-6">7.1. Ви маєте право:</span>
                        <ul>
                            <li>
                                <span className="text-xl leading-6">
                                    Доступу до вашої особистої інформації, яку ми зберігаємо;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Виправлення неточностей у вашій особистій інформації;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Видалення вашої особистої інформації;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Обмеження обробки вашої особистої інформації;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Заперечення проти обробки вашої особистої інформації;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Перенесення вашої особистої інформації іншому постачальнику
                                    послуг.
                                </span>
                            </li>
                        </ul>
                        <br />
                        <span className="text-xl leading-6">
                            8. Зміни до Політики конфіденційності{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            8.1. Ми залишаємо за собою право в будь-який час вносити зміни до цієї
                            Політики конфіденційності. Зміни набирають чинності з моменту їх
                            публікації на Сайті.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            8.2. Продовжуючи використовувати Сайт після внесення змін до Політики
                            конфіденційності, ви погоджуєтесь з новими умовами.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">9. Контакти </span>
                        <br />
                        <span className="text-xl leading-6">
                            9.1. Якщо у вас є будь-які питання або коментарі щодо цієї Політики
                            конфіденційності, будь ласка, зв'яжіться з нами за допомогою
                            контактної інформації, вказаної на Сайті.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            Дата набрання чинності: 10.06.2024
                        </span>
                        <br />
                        <br />
                        Сподіваємось, що наш Сайт принесе вам лише позитивний досвід!
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Privacy;
