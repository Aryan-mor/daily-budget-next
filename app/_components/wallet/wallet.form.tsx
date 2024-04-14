'use client'
import CurrenciesSelector from "@/app/_components/currencies/currencies.selector";
import {useFormState} from 'react-dom';
import {createWallet} from "@/app/_api/wallets";
import {Button, Input} from "@nextui-org/react";
import {WalletFormClassName, WalletFormInitialProps} from "@/app/_components/wallet/wallet.form.props";
import {useState} from "react";


function WalletForm({currencies}: { currencies: null | Currency[] }) {
    const initialState = {message: '', errors: {}};
    const [state, dispatch] = useFormState(createWallet, initialState);
    const [currency, setCurrency] = useState<Currency | undefined>(undefined);

    return (
        <form
            action={dispatch}
            className={WalletFormClassName}>
            <CurrenciesSelector
                {...WalletFormInitialProps.currencies}
                currencies={currencies}
                isInvalid={!!state.errors?.currency_id}
                errorMessage={state.errors?.currency_id?.[0]}
                onChange={(e) => setCurrency(currencies?.find(cur => cur.id === Number(e.target.value)))}/>
            <Input
                {...WalletFormInitialProps.budget}
                isInvalid={!!state.errors?.budget}
                errorMessage={state.errors?.budget?.[0]}
                startContent={
                    currency ?
                        <div className="pointer-events-none flex items-center">
                            <span className="text-default-400 text-small">{currency.symbol}</span>
                        </div> : undefined
                }/>
            <Button {...WalletFormInitialProps.submit}/>
        </form>
    )
}


export default WalletForm
