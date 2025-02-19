import { getUser } from "@/features/auth/queries";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { PATHS } from "@/utils/paths";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const user = await getUser();

  if (user) {
    redirect(PATHS.DASHBOARD);
  }

  return <SignUpCard />;
};

export default SignUpPage;
