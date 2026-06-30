"use client";

import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { signUp } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error , setError] = useState("")
    const [loading , setLoading] = useState(false)

    const router = useRouter()

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        setError("")
        setLoading(true)

        try{
            const result = await signUp.email({
                name,
                email,
                password
            })

            if (result.error) {
                setError(result.error.message ?? "Failed to sign up")
            } else{
                router.push("/dashboard")
            }
        } catch(error){
            setError("Unexpected Error: Failed to create an account")
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-secondary/30 p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
            <Briefcase className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Create an account
          </CardTitle>
          <CardDescription>
            Create an account to get started with our services. Please fill in
            the required information below to sign up.
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <CardContent className="space-y-4">
            {error && (
                <div className="rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                    {error}
                </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Viraj Shinde"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="viraj.shinde@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                minLength={8}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-4">
            <Button 
            type="submit"
            className="w-full mt-4"
            disabled={loading}
            >
            {loading ? "Creating Account..." : "Sign Up"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="font-medium text-primary hover:underline"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
