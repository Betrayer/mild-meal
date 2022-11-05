import React, { FC, FormEvent, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { AuthData } from '../../../types/types';

import './registrationForm.scss';

interface RegistrationProps {
	switchForm: () => void;
	handleLoginButton: () => void;
	handleRegistrationFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
	handleAuthInput: (e: FormEvent<HTMLInputElement>) => void;
	authCredentials: AuthData;
}

const RegistrationForm: FC<RegistrationProps> = ({
	switchForm,
	handleLoginButton,
	handleRegistrationFormSubmit,
	handleAuthInput,
	authCredentials,
}) => {
	const modalRef = useRef(null);

	const currentThemeColor = useSelector(
		(state: RootState) => state.global.themeColor
	);

	return (
		<form
			ref={modalRef}
			className={`registration-form ${currentThemeColor}`}
			onSubmit={(e) => handleRegistrationFormSubmit(e)}
		>
			<div
				className="registration-form__close-button"
				onClick={handleLoginButton}
			/>
			<span className="registration-form__title">registration form</span>
			<input
				className={`${currentThemeColor}`}
				type="text"
				name="name"
				placeholder="name"
			/>
			<input
				className={`${currentThemeColor}`}
				required
				type="email"
				name="email"
				placeholder="email"
				value={authCredentials.email}
				onChange={handleAuthInput}
			/>
			<input
				className={`${currentThemeColor}`}
				type="number"
				name="age"
				placeholder="age"
			/>
			<input
				className={`${currentThemeColor}`}
				type="text"
				name="city"
				placeholder="city"
			/>
			<input
				className={`${currentThemeColor}`}
				required
				minLength={5}
				type="password"
				name="password"
				placeholder="password"
				value={authCredentials.password}
				onChange={handleAuthInput}
			/>
			<input
				className={`${currentThemeColor}`}
				required
				minLength={5}
				type="password"
				name="passwordConfirmation"
				placeholder="confirm passsword"
				value={authCredentials.passwordConfirmation}
				onChange={handleAuthInput}
			/>
			<label className="checkbox-wrapper">
				<input
					className="registration-form__checkbox"
					type="checkbox"
				/>{' '}
				i promise to be a good boy/girl/helicopter
			</label>
			<button
				className={`registration-form__buttons__register-button ${currentThemeColor}`}
				type="submit"
			>
				register
			</button>
			<button
				className={`registration-form__buttons__login-button ${currentThemeColor}`}
				onClick={switchForm}
			>
				i have an account, i wanna log in
			</button>
		</form>
	);
};

export default RegistrationForm;
