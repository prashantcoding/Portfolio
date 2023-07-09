import { string } from "prop-types";

export default {
    name: "project",
    title: "project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",

        },
        {
            name:"Date",
            type:"datetime"
        },
        {
            name: "place",
            type: "string",
        }
        , {
            name: "description",
            type: "text",
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    { value: "Personal", title: "Personal" },
                    { value: "Client", title: "client" },
                    { value: "school", title: "school" }
                ]
            }


        },{
            name:"link",
            type:"url",
        },{
            name:"tags",
            type:"array",
            of:[
                {
                    type:"string",
                }
            ],
            options:{
                layout:"tags",
            }
        }
    ]
}