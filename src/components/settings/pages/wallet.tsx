import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WalletIcon } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

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
    const { t } = useTranslation();
    const [amount, setAmount] = useState("");
    const [newTransaction, setNewTransaction] = useState<Transaction | null>(null);

    const handleAddTransaction = () => {
        if (amount) {
            const currentDate = new Date().toLocaleDateString();
            const transaction: Transaction = { type: t('settings.walletSampleTopUp'), amount: parseInt(amount), date: currentDate };
            setNewTransaction(transaction);
            setAmount("");
        }
    };

    return (
        <div className="bg-transparent rounded-2xl w-full p-4">
            <div className="flex flex-col">
                <div className="flex flex-col font-semibold max-w-[596px] mx-auto">
                    <div className="flex justify-center items-center p-8 w-full bg-card2 rounded-3xl max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between">
                            <WalletIcon className="w-24 h-24" />
                            <div className="flex flex-col my-auto">
                                <div className="text-subheading-1 font-bold text-typographySecondary">{t('settings.walletPage.myBalance')}</div>
                                <div className="mt-2 text-4xl font-bold font-manrope">{props.balance}₴</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 w-full text-base max-md:max-w-full">
                        {t('settings.walletSampleTopUp')}
                    </div>
                    <InputField
                        placeholder={t('settings.walletPage.amount')}
                        className="justify-center items-start px-5 py-3 mt-2 w-full text-base whitespace-nowrap rounded-3xl bg-background40 border-secondary text-typography placeholder:text-typographySecondary max-md:pr-5 max-md:max-w-full"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                    <Button
                        className="justify-center items-center px-9 py-3 mt-2.5 w-full text-base text-background whitespace-nowrap rounded-3xl max-md:px-5 max-md:max-w-full"
                        onClick={handleAddTransaction}
                    >
                        {t('settings.walletPage.topUpButton')}
                    </Button>
                </div>

                <div className="mt-8 w-full font-semibold max-md:max-w-full">
                    {t('settings.walletPage.history')}
                </div>
                <Table className="p-5 text-base text-typography rounded-3xl bg-card2">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">{t('settings.walletPage.amount')}</TableHead>
                            <TableHead>{t('settings.walletPage.name')}</TableHead>
                            <TableHead>{t('settings.walletPage.date')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[...props.transactions].reverse().map((transaction, index) => (
                            <TableRow className="bg-card1" key={index}>
                                <TableCell>{transaction.amount > 0 ? "+" + transaction.amount + "₴" : transaction.amount + "₴"}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                            </TableRow>
                        ))}
                        {newTransaction && (
                            <TableRow className="bg-card1">
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

