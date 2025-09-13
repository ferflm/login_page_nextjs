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

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react"
import { toast } from "sonner";
import { TriangleAlert } from "lucide-react";

export default function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const router = useRouter();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPending(true);

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setPending(false);
        if (!res.ok) {
            setError("Invalid Credentials");
        } else {
            toast.success("Login succesfull");
            router.push("/");
        } 
    };


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

                {!!error && (
                    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                        <TriangleAlert />
                        <p>{error}</p>
                    </div>
                )}

                <CardContent className="px-2 sm:px-6">
                    <form onSubmit={handleSubmit} className="space-y-3">
                        <Input
                            type="email"
                            disabled={pending}
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            type="password"
                            disabled={pending}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button className="w-full hover:bg-[#9929EA] hover:scale-110" size="lg" disabled={pending}>
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