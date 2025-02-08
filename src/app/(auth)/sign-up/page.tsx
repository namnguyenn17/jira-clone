import { getUser } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { PATHS } from "@/lib/paths";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const user = await getUser();

  if (user) {
    redirect(PATHS.DASHBOARD);
  }

  return <SignUpCard />;
};

export default SignUpPage;
