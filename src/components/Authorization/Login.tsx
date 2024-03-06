import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import { InputField } from "../ui/InputField";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
	return (
		<div className="bg-white rounded-lg p-8 max-w-md mx-auto">
			<div className="flex justify-between items-start">
				<h2 className="text-xl font-semibold">
					Авторизуйтесь, щоб продовжити
				</h2>
				<button className="text-lg leading-none">×</button>
			</div>
			<form className="mt-4">
				<div className="flex flex-col space-y-4">
					<InputField placeholder="Логін або e-mail" type="text" />
					<InputField placeholder="Пароль" type="password" />
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-2">
							<Checkbox id="remember-me" />
							<label
								className="text-sm font-medium leading-none"
								htmlFor="remember-me"
							>
								Запам'ятати мене
							</label>
						</div>
						<Link className="text-sm" to="/reset_password">
							Не пам'ятаю пароль
						</Link>
					</div>
					<Button className="mt-4">Увійти</Button>
				</div>
			</form>
			<div className="mt-4 text-center">
				<Link className="text-sm" to="/register">
					Немає аккаунту? Створіть новий
				</Link>
			</div>
		</div>
	);
};

export default Login;
