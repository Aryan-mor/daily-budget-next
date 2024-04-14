"use client"

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider as ToastPR,
    ToastTitle,
    ToastViewport,
} from "@/app/_components/toast/toast"
import {useToast} from "@/app/_components/toast/use-toast"

export function ToastProvider() {
    const {toasts} = useToast()

    return (
        <ToastPR>
            {toasts.map(function ({id, title, description, action, ...props}) {
                return (
                    <Toast key={id} {...props}>
                        <div className="grid gap-1">
                            {title && <ToastTitle>{title}</ToastTitle>}
                            {description && (
                                <ToastDescription>{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose/>
                    </Toast>
                )
            })}
            <ToastViewport/>
        </ToastPR>
    )
}
