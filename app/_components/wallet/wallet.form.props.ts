import type {ButtonProps, InputProps, SelectProps} from "@nextui-org/react";

export const WalletFormInitialProps = {
    currencies: ({
        name: "currency_id",
        isRequired: true,
    } as SelectProps),
    budget: ({
        label: 'Budget',
        type: 'number',
        name: 'budget',
        isRequired: true,
    } as InputProps),
    submit: ({
        type: 'submit',
        color: "primary",
        variant: "solid",
        children: 'Create'
    } as ButtonProps),
}

export const WalletFormClassName = 'max-w-lg w-full flex flex-col gap-4'
