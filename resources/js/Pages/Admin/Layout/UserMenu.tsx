import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { router } from "@inertiajs/react"

export default function UserMenu() {
    const handleLogout = () => {
        // TODO: url nya masih hardcode/dummy
        router.post("/logout") // langsung hit ke route logout Laravel
    }

    return (
        <DropdownMenu>
            {/* Trigger: avatar + nama + email */}
            <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-2 px-2 py-2 rounded-md hover:bg-muted focus:outline-none">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>AD</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                        <span className="text-sm font-medium">Admin</span>
                        <span className="text-xs text-muted-foreground">admin@example.com</span>
                    </div>
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                    <div className="flex flex-col">
                        <span className="font-medium">Admin</span>
                        <span className="text-xs text-muted-foreground">admin@example.com</span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    className="text-red-600 cursor-pointer"
                    onClick={handleLogout}
                >
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
