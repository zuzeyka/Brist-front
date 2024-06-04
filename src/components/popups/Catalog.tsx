import React from "react";

const Catalog: React.FC = () => {
    return (
        <div className="px-8 pt-5 pb-6 rounded-3xl bg-neutral-100 max-md:px-5">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                        <div className="text-xl font-medium leading-7 text-black max-md:max-w-full">
                            Жанри
                        </div>
                        <div className="mt-2 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="text-base leading-7 text-black max-md:mt-5">
                                        Рольові
                                        <br />
                                        Групові ігри
                                        <br />
                                        Мандрівні ігри
                                        <br />
                                        Покрокові ігри
                                        <br />
                                        Пригодницькі рольові ігри
                                        <br />
                                        Рольові бойовики
                                        <br />
                                        Стратегічні рольові ігри
                                        <br />
                                        Японські рольові
                                        <br />
                                        Симулятори
                                        <br />
                                        Будівництво й автоматизація
                                        <br />
                                        Життя й занурення
                                        <br />
                                        Космос і літання
                                        <br />
                                        Пісочниці й фізика
                                        <br />
                                        Симулятори побачень
                                        <br />
                                        Фермерство й виготовлення
                                        <br />
                                        Хобі та робота
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="text-base leading-7 text-black max-md:mt-5">
                                        Стратегії
                                        <br />
                                        Військові стратегії
                                        <br />
                                        Глобальні стратегії та 4X
                                        <br />
                                        Захист вежами
                                        <br />
                                        Карткові й настільні ігри
                                        <br />
                                        Містобудівельні ігри
                                        <br />
                                        Покрокові стратегії
                                        <br />
                                        Стратегії в реальному часі
                                        <br />
                                        Спорт і перегони
                                        <br />
                                        Індивідуальні види спорту
                                        <br />
                                        Командний спорт
                                        <br />
                                        Перегони
                                        <br />
                                        Риболовля і полювання
                                        <br />
                                        Симулятори перегонів
                                        <br />
                                        Спорт
                                        <br />
                                        Спортивні симулятори
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="text-base leading-7 text-black max-md:mt-5">
                                        Бойовики
                                        <br />
                                        Аркади й ритм-ігри
                                        <br />
                                        Перестріляти всіх
                                        <br />
                                        Платформери й бігання
                                        <br />
                                        Поєдинки й бойові мистецтва
                                        <br />
                                        Рубанина
                                        <br />
                                        Стрілянки від першої особи
                                        <br />
                                        Стрілянки від третьої особи
                                        <br />
                                        Пригоди
                                        <br />
                                        Візуальні новели
                                        <br />
                                        Глибокий сюжет
                                        <br />
                                        Головоломки
                                        <br />
                                        Казуальні ігри
                                        <br />
                                        Метроїдванії
                                        <br />
                                        Пригодницькі рольові ігри
                                        <br />
                                        Приховані об’єкти
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-black max-md:mt-10">
                        <div className="text-xl font-medium leading-7">Користувачі</div>
                        <div className="mt-2 text-base leading-7">
                            Багатокористувацькі
                            <br />
                            Кооперативні
                            <br />
                            Локальні групові ігри
                            <br />
                            Локальні ігри
                            <br />
                            Масові багатокористувацькі
                            <br />
                            Мережеві змагальні ігри
                            <br />
                            Однокористувацькі ігри
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
