import { getUser } from "@/features/auth/queries";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const user = await getUser();

  if (user) {
    redirect(PATHS.DASHBOARD);
  }
  return <SignInCard />;
};

export default SignInPage;
