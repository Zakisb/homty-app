
const genderOptions = [
	{ value: 'male', label: 'Male' },
	{ value: 'female', label: 'Female' },
	{ value: 'other', label: 'Other' }
]

const maritalOption = [
	{ value: 'single', label: 'Single' },
	{ value: 'married', label: 'Married' },
	{ value: 'divorced', label: 'Divorced' },
	{ value: 'widowed', label: 'Widowed' }
]

export const questions = [{
	question: 'What\'s birth date?', answer: '', step: 'Personal Information', type: 'birthDate', label: 'Birth date',  formType : 'date'
}, {
	question: `What's your gender?`, answer: '', step: 'Personal Information', type: 'gender', label: 'Gender',  formType : 'select', options : genderOptions,
}, {
	question: `What is your marital status?`, answer: '', step: 'Personal Information', type: 'marital', label: 'Marital status',  formType : 'select', options : maritalOption
}, {
	question: `What is your occupation?`, answer: '', step: 'Personal Information', type: 'occupation', label: 'Occupation', formType : 'input'
}, {
	question: 'What is your address?', answer: '', step: 'Personal Information', type: 'adresse', label: 'Adresse',formType : 'input'
}, {
	question: 'What is your phone number?', answer: '', step: 'Personal Information', type: 'phone', label: 'Phone', formType : 'phone'
},
];

