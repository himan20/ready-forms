import { CONTROL_TYPES, ERROR_MESSAGES } from 'ready-forms';

export const example = {
    fields: [
        {
            type: CONTROL_TYPES.text,
            k: 'firstName',
            placeholder: "Enter your first name",
            label:"First Name",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED },
                minLength: {value: 5, errorMessage: ERROR_MESSAGES.MIN_LENGTH_5}
            }
        },
        {
            type: CONTROL_TYPES.text,
            k: 'lastName',
            placeholder: "Enter your last name",
            label:"Last Name",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.text,
            k: 'comments',
            placeholder: "Enter your comments here",
            label:"Comments",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.text,
            k: 'password',
            placeholder: "Enter your password here",
            label:"Password",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED },
            }
        },
        {
            type: CONTROL_TYPES.text,
            k: 'confirmPassword',
            placeholder: "Re-enter your password to confirm",
            label:"Confirm Password",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.table,
            k: "populationData",
            header:"TOTAL POPULATION",
            columns: [
                {label: "Country"},
                {label: "Male Population", stateKeyToUse: "malePopulation"},
                {label: "Female Population", stateKeyToUse: "femalePopulation"},
            ],
            rows: [
                [
                    {
                        type: CONTROL_TYPES.label,
                        k: "lbl1",
                        value: "India",
                    },
                    {
                        type: CONTROL_TYPES.text,
                        k:"txtTbl11",
                        placeholder: "Number of males",
                        value: ""
                    },
                    {
                        type: CONTROL_TYPES.text,
                        k:"txtTbl12",
                        placeholder: "Number of females",
                        value: ""
                    }
                ],
                [
                    {
                        type: CONTROL_TYPES.label,
                        k: "lbl2",
                        value: "Russia",
                    },
                    {
                        type: CONTROL_TYPES.text,
                        k:"txtTbl21",
                        placeholder: "Number of males",
                        value: ""
                    },
                    {
                        type: CONTROL_TYPES.text,
                        k:"txtTbl22",
                        placeholder: "Number of females",
                        value: ""
                    }
                ],
                [
                    {
                        type: CONTROL_TYPES.label,
                        k: "lbl3",
                        value: "USA"
                    },
                    {
                        type: CONTROL_TYPES.text,
                        k:"txtTbl31",
                        placeholder: "Number of males",
                        value: ""
                    },
                    {
                        type: CONTROL_TYPES.text,
                        k:"txtTbl32",
                        placeholder: "Number of females",
                        value: ""
                    }
                ]
            ]
        },
        {
            type: CONTROL_TYPES.currency,
            k: 'salary',
            label: 'Expected monthly Salary: ',
            value: "",
            min: 0.00,
            step: 0.01,
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.date,
            k: 'dob',
            label: 'Date of birth',
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.dropdownList,
            k: 'country',
            label: "Country of Residence",
            options: [
                {key: "IN", text: "India"},
                {key: "USA", text: "USA"},
                {key: "HK", text: "Hong Kong"},
                {key: "RU", text: "Russia"},
            ],
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.number,
            k: 'siblings',
            label: 'How many siblings do you have? ',
            value: "",
            min: 0,
            step: 1,
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.percentage,
            k: 'roi',
            label: 'Return on Investment (%) ',
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.radio,
            k: 'gender',
            label: "Gender",
            options: [
                {key: "M", text: "Male"},
                {key: "F", text: "Female"},
                {key: "O", text: "Other"},
            ],
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.website,
            k: 'website',
            label: "Favorite Website",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.year,
            k: "passout",
            label: "Year of Passing highest Education",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        },
        {
            type: CONTROL_TYPES.zipcode,
            k: "zipcode",
            label: "Zip code",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED }
            }
        }
    ]
}

export const example2 = {
    fields: [
        {
            type: CONTROL_TYPES.text,
            k: 'firstNameForm2',
            placeholder: "Enter your first name",
            label:"First Name",
            value: "",
            validations: {
                required: { value: true, errorMessage: ERROR_MESSAGES.REQUIRED },
                minLength: {value: 5, errorMessage: ERROR_MESSAGES.MIN_LENGTH_5}
            }
        },
    ]}