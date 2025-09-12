"use client"

import { Button } from "@/components/ui/button";
import { 
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link"

// react icons
import {FaGithub} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

export default function SignIn () {
    return (
        <div className="h-full flex items-center justify-center bg-[#000000]">
            <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
                <CardHeader>
                    <CardTitle className="text-center">
                        Sign In
                    </CardTitle>
                    <CardDescription className="text-sm text-center text-accent-foreground">
                        Use your email or services to sign in
                    </CardDescription>
                </CardHeader>
                <CardContent className="px-2 sm:px-6">
                    <form action="" className="space-y-3">
                        <Input
                            type="email"
                            disabled={false}
                            placeholder="Email"
                            value={""}
                            onChange={() => {}}
                            required
                        />
                        <Input
                            type="password"
                            disabled={false}
                            placeholder="Password"
                            value={""}
                            onChange={() => {}}
                            required
                        />
                        <Button className="w-full hover:bg-[#9929EA] hover:scale-110" size="lg" disabled={false}>
                            Continue
                        </Button>
                    </form>

                    <Separator/>
                    <div className="flex my-2 justify-evenly mx-auto items-center">
                        <Button
                            disabled={false}
                            onClick={() => {}}
                            variant="outline"
                            size="lg"
                            className="hover:bg-slate-100 bg-white hover:scale-110"
                        >
                            <FcGoogle className="size-8 left-2.5 top-2.5"/>
                        </Button>

                        <Button
                            disabled={false}
                            onClick={() => {}}
                            variant="outline"
                            size="lg"
                            className="hover:bg-slate-100 bg-white hover:scale-110"
                        >
                            <FaGithub className="size-8 left-2.5 top-2.5"/>
                        </Button>
                    </div>
                    <p className="text-center text-sm mt-2 text-muted-foreground">
                        Create an account
                        <Link className="text-[#9929EA] ml-4 hover:underline cursor-pointer" href='sign_up'>Sign Up</Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}