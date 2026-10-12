import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { WalletIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/components/authorization/auth-context";

interface Transaction {
    id: string;
    type: string;
    amount: number;
    date: string;
}

interface WalletTransactionDto {
    id: string;
    userId: string;
    transactionObj: string;
    currency: number;
    createdAt?: string;
}

const Wallet: React.FC = () => {
    const { t } = useTranslation();
    const { userId } = useAuth();
    const [balance, setBalance] = useState<number | null>(null);
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        if (!userId) return;
        let cancelled = false;

        async function load() {
            try {
                const [userRes, txRes] = await Promise.all([
                    fetch(`http://localhost:5049/api/User/${userId}`, { credentials: 'include' }),
                    fetch('http://localhost:5049/api/WalletTransaction', { credentials: 'include' }),
                ]);
                if (cancelled) return;

                if (userRes.ok) {
                    const user = await userRes.json() as { amountOfMoney: number };
                    setBalance(user.amountOfMoney);
                }

                const rows = txRes.ok ? await txRes.json() as WalletTransactionDto[] : [];
                const resolved = await Promise.all(rows.map(async (row): Promise<Transaction> => {
                    // transactionObj is a game or DLC id depending which it was —
                    // there's no type flag on the row itself, so try both.
                    let name = t('settings.walletPage.unknownItem');
                    const gameRes = await fetch(`http://localhost:5049/api/GamesInShop/${row.transactionObj}`, { credentials: 'include' });
                    if (gameRes.ok) {
                        name = (await gameRes.json() as { name: string }).name;
                    } else {
                        const dlcRes = await fetch(`http://localhost:5049/api/DLCInShop/${row.transactionObj}`, { credentials: 'include' });
                        if (dlcRes.ok) name = (await dlcRes.json() as { name: string }).name;
                    }
                    return {
                        id: row.id,
                        type: name,
                        amount: row.currency,
                        date: row.createdAt ? new Date(row.createdAt).toLocaleDateString() : '',
                    };
                }));

                if (!cancelled) setTransactions(resolved);
            } catch (error) {
                console.log('Fetch wallet error:', error);
            }
        }

        load();
        return () => { cancelled = true; };
    }, [userId, t]);

    return (
        <div className="bg-transparent rounded-2xl w-full p-4">
            <div className="flex flex-col">
                <div className="flex flex-col font-semibold max-w-[596px] mx-auto">
                    <div className="flex justify-center items-center p-8 w-full bg-card2 rounded-3xl max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 justify-between">
                            <WalletIcon className="w-24 h-24" />
                            <div className="flex flex-col my-auto">
                                <div className="text-subheading-1 font-bold text-typographySecondary">{t('settings.walletPage.myBalance')}</div>
                                <div className="mt-2 text-4xl font-bold font-manrope">{balance ?? 0}₴</div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 w-full text-base max-md:max-w-full">
                        {t('settings.walletPage.topUpUnavailable')}
                    </div>
                    <InputField
                        disabled
                        placeholder={t('settings.walletPage.amount')}
                        className="justify-center items-start px-5 py-3 mt-2 w-full text-base whitespace-nowrap rounded-3xl bg-background40 border-secondary text-typography placeholder:text-typographySecondary max-md:pr-5 max-md:max-w-full opacity-60"
                        value=""
                        readOnly
                    />
                    <Button
                        disabled
                        className="justify-center items-center px-9 py-3 mt-2.5 w-full text-base text-background whitespace-nowrap rounded-3xl max-md:px-5 max-md:max-w-full opacity-60"
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
                        {[...transactions].reverse().map((transaction) => (
                            <TableRow className="bg-card1" key={transaction.id}>
                                <TableCell>{transaction.amount > 0 ? "+" + transaction.amount + "₴" : transaction.amount + "₴"}</TableCell>
                                <TableCell>{transaction.type}</TableCell>
                                <TableCell>{transaction.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Wallet;

