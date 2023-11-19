import Container from '@/components/Container';
import { useTranslations } from 'next-intl';
import LoginForm from './components/loginForm';
import SignupForm from './components/signupForm';

function Signup() {
  const t = useTranslations();
  return (
    <div className="container mx-auto my-16">
      <Container>
        <div className="flex gap-32 px-16">
          <div className="flex-1">
            <p className="mb-1 text-xl font-bold text-primary">
              {t('Signup.createAnAccount')}
            </p>
            <p className="mb-6 text-sm text-primary-400">
              {t('Signup.enterInformation')}
            </p>
            <SignupForm />
          </div>
          <div className="w-[1px] bg-neutral-200"></div>
          <div className="flex-1">
            <LoginForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
