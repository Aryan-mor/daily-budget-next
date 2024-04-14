import WalletFormServer from "@/app/_components/wallet/wallet.form.server";

export default async function New() {


    return (
        <div className="w-full min-h-[inherit] flex flex-col justify-center items-center gap-8">
            <h1 className="text-4xl">
                Welcome to Daily Budget
            </h1>
            <span className="text-base opacity-80 -mt-4">
                To start please create a wallet
            </span>
            <WalletFormServer/>
        </div>
    )
}


