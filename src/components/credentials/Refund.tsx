import Head from "../main/Head";
import Footer from "../main/Footer";


const Refund: React.FC = () => {
    return (
        <>
            <Head></Head>
            <div className="flex items-center justify-center px-72 py-12">
                <div className="flex flex-col p-16 text-block-2 bg-card1 rounded-[30px] max-md:px-5">
                    <div className="text-3xl max-md:max-w-full text-heading-2 font-bold font-manrope">
                        Політика повернення коштів ігрового магазину
                    </div>
                    <div className="mt-12 text-2xl leading-7 max-md:mt-10 max-md:max-w-full">
                        Політика повернення коштів ігрового магазину
                        <br />
                        Ми прагнемо забезпечити наших клієнтів найкращими продуктами та
                        послугами. Якщо ви не задоволені своєю покупкою, будь ласка, ознайомтеся
                        з нашою політикою повернення коштів, щоб зрозуміти, як ви можете
                        отримати відшкодування.
                        <br />
                        <br />
                        <span className="text-xl leading-6">1. Загальні положення </span>
                        <br />
                        <span className="text-xl leading-6">
                            1.1. Ця Політика повернення коштів регулює процес повернення та
                            відшкодування коштів за покупки, здійснені в нашому ігровому магазині
                            (далі — &quot;Магазин&quot;).{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            1.2. Політика застосовується до всіх клієнтів Магазину.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">2. Повернення товарів </span>
                        <br />
                        <span className="text-xl leading-6">
                            2.1. Ви можете повернути фізичні товари, придбані в Магазині, протягом
                            [30] днів з дати покупки за умови, що товари знаходяться в
                            оригінальній упаковці та не були використані.
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            2.2. Для цифрових товарів (наприклад, ігрових ключів, цифрових
                            завантажень) повернення та відшкодування можливе лише у випадку, якщо
                            товар не був активований або завантажений.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">3. Процедура повернення </span>
                        <br />
                        <span className="text-xl leading-6">
                            3.1. Щоб ініціювати повернення, зв'яжіться з нашою службою підтримки
                            клієнтів через [вкажіть контактний метод: електронну пошту, телефон,
                            форму на сайті].{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            3.2. Після отримання вашого запиту ми надамо вам інструкції щодо
                            повернення товару.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            3.3. Ви несете відповідальність за витрати на повернення товару, якщо
                            інше не зазначено в нашій Політиці.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">4. Обробка повернень </span>
                        <br />
                        <span className="text-xl leading-6">
                            4.1. Після отримання та перевірки поверненого товару ми надішлемо вам
                            повідомлення про статус вашого повернення.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            4.2. Якщо повернення затверджено, ми обробимо ваше відшкодування
                            протягом [10] робочих днів. Відшкодування буде здійснено тим же
                            методом, який використовувався для початкової оплати.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">5. Відшкодування </span>
                        <br />
                        <span className="text-xl leading-6">
                            5.1. Ми повернемо повну вартість товару, за винятком витрат на
                            доставку, якщо товар не був дефектним.{" "}
                        </span>
                        <br />
                        <span className="text-xl leading-6">
                            5.2. Якщо товар повернуто через дефект або помилку з нашого боку, ми
                            також відшкодуємо витрати на доставку.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">6. Виключення </span>
                        <br />
                        <span className="text-xl leading-6">
                            6.1. Деякі товари не підлягають поверненню, включаючи, але не
                            обмежуючись, наступні:
                        </span>
                        <ul>
                            <li>
                                <span className="text-xl leading-6">
                                    Розпаковані програмні продукти;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Товари зі знижками або розпродажів;
                                </span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">Подарункові картки;</span>
                            </li>
                            <li>
                                <span className="text-xl leading-6">
                                    Товари, які мають явні сліди використання або пошкодження,
                                    спричинені клієнтом.
                                </span>
                            </li>
                        </ul>
                        <br />
                        <span className="text-xl leading-6">7. Обмін товарів </span>
                        <br />
                        <span className="text-xl leading-6">
                            7.1. Ми пропонуємо обмін товарів лише в разі, якщо товар виявився
                            дефектним або помилково надісланим. Для обміну зв'яжіться з нашою
                            службою підтримки клієнтів.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">8. Контакти </span>
                        <br />
                        <span className="text-xl leading-6">
                            8.1. Якщо у вас є будь-які питання або коментарі щодо цієї Політики
                            повернення коштів, будь ласка, зв'яжіться з нами за допомогою
                            контактної інформації, вказаної на нашому сайті.
                        </span>
                        <br />
                        <br />
                        <span className="text-xl leading-6">
                            Дата набрання чинності: 10.06.2024
                        </span>
                        <br />
                        <br />
                        Дякуємо за ваші покупки в нашому Магазині! <br />
                        Ми цінуємо вашу довіру і прагнемо забезпечити ваше задоволення від наших
                        продуктів та послуг.
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Refund;
