'use client'
import type {SelectProps} from "@nextui-org/react"
import {Select, SelectItem} from "@nextui-org/react";


function SelectSkeleton(props: Omit<SelectProps, 'children'>) {
    return (
        <Select {...props} isLoading isDisabled>
            <SelectItem key="Skeleton" value="Skeleton">
                Loading...
            </SelectItem>
        </Select>)
}

export default SelectSkeleton
