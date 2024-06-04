import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React, { useState } from "react";

interface Transaction {
    type: string;
    amount: number;
    date: string;
}

interface WalletProps {
    balance: number;
    transactions: Transaction[];
}

const Wallet: React.FC<WalletProps> = (props) => {
    const [amount, setAmount] = useState("");
    const [newTransaction, setNewTransaction] = useState<Transaction | null>(null);

    const handleAddTransaction = () => {
        if (amount) {
            const currentDate = new Date().toLocaleDateString();
            const transaction: Transaction = { type: "Поповнення балансу", amount: parseInt(amount), date: currentDate };
            setNewTransaction(transaction);
            setAmount("");
        }
    };

    return (
        <div className="bg-gray-200 rounded-2xl w-full p-4">
            <div className="flex flex-col">
                <div className="flex flex-col font-semibold text-black max-w-[596px] mx-auto">
                    <div className="flex justify-center items-center p-8 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a33cf725742ceb9edb6ff5b71af3148e065bb87dc132eb23f491f1b0afd2a35c?"
                                className="shrink-0 aspect-square w-[90px]"
                            />
                            <div className="flex flex-col my-auto">
                                <div className="text-xl">Мій баланс</div>
                                <div className="mt-2 text-4xl">{props.balance}₴</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 w-full text-base max-md:max-w-full">
                        Поповнення балансу
                    </div>
                    <InputField
                        placeholder="Сума"
                        className="justify-center items-start px-5 py-3 mt-2 w-full text-base whitespace-nowrap rounded-3xl bg-stone-300 max-md:pr-5 max-md:max-w-full"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                    <Button
                        className="justify-center items-center px-9 py-3 mt-2.5 w-full text-base text-white whitespace-nowrap rounded-3xl bg-zinc-800 max-md:px-5 max-md:max-w-full"
                        onClick={handleAddTransaction}
                    >
                        Поповнити
                    </Button>
                </div>

                <div className="mt-8 w-full font-semibold max-md:max-w-full">
                    Історія транзакцій
                </div>
                <Table className="p-5 text-base text-black rounded-3xl bg-zinc-300">
                    <TableCaption>Список ваших останніх рахунків</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Сума</TableHead>
                            <TableHead>Найменування</TableHead>
                            <TableHead>Дата</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {props.transactions.map((transaction, index) => (
                            <TableRow className="bg-white hover:bg-zinc-200" key={index}>
                                <TableCell>{transaction.amount > 0 ? "+" + transaction.amount + "₴" : transaction.amount + "₴"}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                            </TableRow>
                        ))}
                        {newTransaction && (
                            <TableRow className="bg-white hover:bg-zinc-200">
                                <TableCell>{newTransaction.amount > 0 ? "+" + newTransaction.amount + "₴" : newTransaction.amount + "₴"}</TableCell>
                                <TableCell>{newTransaction.type}</TableCell>
                                <TableCell>{newTransaction.date}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Wallet;

