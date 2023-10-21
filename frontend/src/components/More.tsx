import * as React from "react"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"


import {
    DropdownMenu,

    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function MoreHorizontalMenu({ children, onDelete }: { children: React.ReactNode, onDelete: () => void }) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span className="bg-gray-600 rounded-md px-2 py-2 cursor-pointer">{children}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Properties</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="stroke-gray-500 outline-none hover:stroke-white hover:bg-slate-300 rounded px-1 py-2 justify-center items-center cursor-pointer ">
                    <span onClick={onDelete}>Delete</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="stroke-gray-500 outline-none hover:stroke-white hover:bg-slate-300 rounded px-1 py-2 justify-center items-center cursor-pointer ">
                    <span>Change Color</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="stroke-gray-500 outline-none hover:stroke-white hover:bg-slate-300 rounded px-1 py-2 justify-center items-center cursor-pointer ">
                    <span>Change Badge Color</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="stroke-gray-500 outline-none hover:stroke-white hover:bg-slate-300 rounded px-1 py-2 justify-center items-center cursor-pointer ">
                    <span>Share This Container</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="stroke-gray-500 outline-none hover:stroke-white hover:bg-slate-300 rounded px-1 py-2 justify-center items-center cursor-pointer ">
                    <span>Edit Container Permissions</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
