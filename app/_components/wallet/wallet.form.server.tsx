import {getCurrencies} from "@/app/_api/currencies";
import WalletForm from "@/app/_components/wallet/wallet.form";
import {Suspense} from "react";
import WalletFormSkeleton from "@/app/_components/wallet/wallet.form.skeleton";

export default async function WalletFormServer() {

    return (
        <Suspense fallback={<WalletFormSkeleton/>}>
            <WalletFormServerComponent/>
        </Suspense>
    )
}


async function WalletFormServerComponent() {
    const {data: currencies} = await getCurrencies();
    return (
        <WalletForm currencies={currencies}/>
    )
}
