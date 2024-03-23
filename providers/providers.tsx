"use client"

import {ReactNode} from "react";
import {ToastProvider} from "@/providers/toastProvider";
import {NextUIProvider} from "@nextui-org/react";

export default function Providers({
                                      children,
                                  }: {
    children: ReactNode
}){

    return(
        <NextUIProvider>
            {children}
            <ToastProvider/>
        </NextUIProvider>
    )
}
