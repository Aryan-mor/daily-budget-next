import SomethingWrong from "@/app/_components/somethingWrong";
import {Select, SelectItem, type SelectProps} from "@nextui-org/react";


type CurrenciesSelectorPropsType = { currencies: null | Currency[] } & Omit<SelectProps, 'children'>

export const CurrenciesSelectorInitialProps = {
    label: "Select a currency"
}

function CurrenciesSelector({currencies, ...props}: CurrenciesSelectorPropsType) {

    if (currencies === null)
        return <SomethingWrong/>

    return (
        <>
            <Select {...CurrenciesSelectorInitialProps} {...props}>
                {currencies.map((item) => (
                    <SelectItem key={item.id} value={item.id}>
                        {item.symbol + ' ' + item.label}
                    </SelectItem>
                ))}
            </Select>
        </>
    )
}

export default CurrenciesSelector
