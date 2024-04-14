import {Button, Input} from "@nextui-org/react";
import {WalletFormClassName, WalletFormInitialProps} from "@/app/_components/wallet/wallet.form.props";
import SelectSkeleton from "@/app/_components/_core/form/select/select.skeleton";
import {CurrenciesSelectorInitialProps} from "@/app/_components/currencies/currencies.selector";

export default function WalletFormSkeleton() {
    return (
        <form className={WalletFormClassName}>
            <SelectSkeleton{...WalletFormInitialProps.currencies} {...CurrenciesSelectorInitialProps}/>
            <Input {...WalletFormInitialProps.budget} isDisabled/>
            <Button {...WalletFormInitialProps.submit} isDisabled/>
        </form>
    )
}
