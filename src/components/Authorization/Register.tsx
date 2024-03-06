import { Button } from "../ui/Button";
import { Checkbox } from "../ui/Checkbox";
import { InputField } from "../ui/InputField";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-center">
			<div className="bg-white p-8 shadow-lg w-[400px]">
				<h1 className="text-2xl font-semibold mb-6">
					Створити новий акаунт
				</h1>
				<form>
					<div className="flex flex-col space-y-4 mb-4">
						<InputField placeholder="Логін" type="text" />
						<InputField placeholder="E-mail" type="email" />
						<InputField placeholder="Пароль" type="password" />
						<InputField
							placeholder="Повторити пароль"
							type="password"
						/>
					</div>
					<div className="flex items-center space-x-2 mb-6">
						<Checkbox id="terms" />
						<label className="text-sm" htmlFor="terms">
							Я погоджуюсь з Умовами використання
						</label>
					</div>
					<Button className="w-full">Продовжити</Button>
				</form>
				<div className="mt-4 text-center">
					<span className="text-sm">Маєте акаунт? </span>
					<Link className="text-sm text-blue-600" to="/login">
						Авторизуйтесь
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Register;
