"use client"

import {ReactNode} from "react";
import {NextUIProvider} from "@nextui-org/react";
import {ToastProvider} from "@/app/_providers/toastProvider";

export default function Providers({
                                      children,
                                  }: {
    children: ReactNode
}) {

    return (
        <NextUIProvider className="min-h-[inherit]">
            {children}
            <ToastProvider/>
        </NextUIProvider>
    )
}
