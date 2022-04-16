export const inhouseFormInputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        label: "Name",
        required: true,

    },
    {
        id: 2,
        name: "date_of_birth",
        type: "date",
        placeholder: "Date of birth",
        label: "Date of birth",
        defaultValue: new Date().toISOString().slice(0, 10)

    },
    {
        id: 3,
        name: "date_of_production",
        type: "date",
        placeholder: "Date of production",
        label: "Date of production",
        defaultValue: new Date().toISOString().slice(0, 10)
    },
    {
        id: 4,
        name: "estimated_live_weight",
        type: "number",
        placeholder: "Estimated live wieght",
        label: "Estmated live weight",


    },
    {
        id: 5,
        name: "color_id",
        type: "select",
        placeholder: "color",
        label: "Color",
        select: true,

    },
    {
        id: 6,
        name: "gender",
        type: "radio",
        label: "Male",



    },
];
export const purchasedFormInputs = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Name",
        label: "Name",
        required: true,

    },
    {
        id: 2,
        name: "date_of_purchase",
        type: "date",
        placeholder: "Date of Purchase",
        label: "Date of birth",
        defaultValue: new Date().toISOString().slice(0, 10)

    },
    {
        id: 3,
        name: "date_of_production",
        type: "date",
        placeholder: "Date of production",
        label: "Date of production",
        defaultValue: new Date().toISOString().slice(0, 10)
    },
    {
        id: 4,
        name: "estimated_live_weight",
        type: "number",
        placeholder: "Estimated live wieght",
        label: "Estmated live weight",
        defaultValue: 0,


    },
    {
        id: 5,
        name: "color_id",
        type: "select",
        placeholder: "color",
        label: "Color",
        select: true,
        options: []

    },
    {
        id: 6,
        name: "gender",
        type: "radio",
        label: "Male",
        select: true


    },
    {
        id: 7,
        name: "transaction_cost",
        type: "number",
        placeholder: "Transaction cost",
        label: "Transaction cost",
        defaultValue: 0,


    },
    {
        id: 8,
        name: "labour_cost",
        type: "number",
        placeholder: "Labour cost",
        label: "Labour cost",
        defaultValue: 0,

    },
    {
        id: 9,
        name: "supplier_id",
        type: "select",
        placeholder: "Supplier",
        label: "Supplier",
        select: true,
        options: []

    },
];