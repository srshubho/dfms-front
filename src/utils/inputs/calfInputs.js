export const calfInputs = [
    {
        id: 1,
        name: "calf_name",
        type: "text",
        placeholder: "Name",
        label: "Name",
        required: true,

    },
    {
        id: 2,
        name: "calf_date_of_birth",
        type: "date",
        placeholder: "Date of birth",
        label: "Date of birth",
        defaultValue: new Date().toISOString().slice(0, 10)

    },
    {
        id: 3,
        name: "calf_estimated_live_weight",
        type: "number",
        placeholder: "Estimated live wieght",
        label: "Estmated live weight",


    },
];
export const calfSelects = [
    {
        id: 1,
        name: "color_id",
        placeholder: "color",
        label: "color",
        options: [

        ],
        path: "colorOption"

    },
    {
        id: 2,
        name: "gender",
        placeholder: "gender",
        label: "Gender",
        options: [
            {
                id: 0,
                value: "male"
            },
            {
                id: 1,
                value: "female"
            }
        ]

    },

];
