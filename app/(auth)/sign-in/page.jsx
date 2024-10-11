import { signIn } from "@/auth";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FcGoogle } from "react-icons/fc";

export default function SignInPage() {
    const signInWithGoogle = async () => {
        // This is a placeholder function
        // In a real application, this would initiate the Google OAuth flow
        console.log("Initiating Google sign-in")
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-muted dark:bg-background">
            <Card className="max-w-sm w-full space-y-6 bg-background dark:bg-muted/20 m-2">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription>Sign in to your account and manage your contacts</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        action={async () => {
                            "use server"
                            await signIn("google", { redirectTo: "/" })
                        }}
                    >
                        <Button
                            variant="default"
                            className="w-full"
                        >
                            <FcGoogle className="mr-2 text-2xl" />
                            Sign in with Google
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="text-center text-sm text-muted-foreground">
                    By signing in, you agree to our Terms of Service and Privacy Policy.
                </CardFooter>
            </Card>
        </div>
    )
}