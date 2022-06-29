import Head from 'next/head'
import { ErrorMessage, useFormik } from 'formik'
import * as Yup from 'yup'

/*
const validate = values => {
	const errors = {}

	if ( !values.firstName ) {
		errors.firstName = 'Required'
	}
	else if ( values.firstName.length > 15 ) {
		errors.firstName = 'Must be 15 characters or less'
	}

	if ( !values.lastName ) {
		errors.lastName = 'Required'
	}
	else if ( values.lastName.length > 20 ) {
		errors.lastName = 'Must be 20 characters or less'
	}

	if ( !values.email ) {
		errors.email = 'Required'
	}
	else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) ) {
		errors.email = 'Invalid email address'
	}

	return errors;
}
*/

/*
const SignupForm = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		//validate,
		validationSchema: Yup.object({
			firstName: Yup.string()
				.max(15, 'Must be 15 characters or less')
				.required('Required'),
			lastName: Yup.string()
				.max(20, 'Must be 20 characters or less')
				.required('Required'),
			email: Yup.string()
				.email('Invalid email address')
				.required('Required'),
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		}
	})

	reutrn (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				{...formik.getFieldProps('firstName')}
				//onChange={formik.handleChange}
				//onBlur={formik.handleBlur}
				//value={formik.values.firstName}
			/>
			{ formik.touched.firstName && formik.errors.firstName ?
				<div>{formik.errors.firstName}</div> : null }

			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="text"
				{...formik.getFieldProps('lastName')}
				//onChange={formik.handleChange}
				//onBlur={formik.handleBlur}
				//value={formik.values.lastName}
			/>
			{ formik.touched.lastName && formik.errors.lastName ?
				<div>{formik.errors.lastName}</div> : null }

			<label htmlFor="email">Email Address</label>
			<input
				id="email"
				name="email"
				type="email"
				{...formik.getFieldProps('email')}
				//onChange={formik.handleChange}
				//onBlur={formik.handleBlur}
				//value={formik.values.email}
			/>
			{ formik.touched.email && formik.errors.email ?
				<div>{formik.errors.email}</div> : null }

			<button type="submit">Submit</button>
		</form>
	)
}
*/

const SignupForm = () => {
	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Must be 15 characters or less')
					.required('Required'),
				lastName: Yup.string()
					.max(20, 'Must be 20 characters or less')
					.required('Required'),
				email: Yup.string()
					.email('Invalid email address')
					.required('Required'),
			})}
			onSumbit={(values, { setSubmitting }) => {
				setTimeout(() => {
					alert(JSON.stringify(values, null, 2))
					setSubmitting(false)
				}, 400)
			}}
		>
		{formik => (
			<Form>
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" type="text" />
				<ErrorMessage name="firstName" />

				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" type="text" />
				<ErrorMessage name="lastName" />

				<label htmlFor="email">Email Address</label>
				<Field name="email" type="text" />
				<ErrorMessage name="email" />

				<button type="submit">Submit</button>
			</Form>
		)}

		</Formik>
	)
}

export default function Home() {
	return (
		<>
			<Head>
				<title>Moro Samuele - Porfolio</title>
				<meta name="description" content="Moro Samuele - Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				{SignupForm}
			</main>
		</>
	)
}