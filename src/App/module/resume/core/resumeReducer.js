import {createSlice} from "@reduxjs/toolkit";

const resumeData = [
    {
        organization : "Royal University of Phnom Penh",
        location : "Phnom Penh, Cambodia",
        role: "Major in Computer Science",
        date: "Current",
        description: [
            "babababababa",
            "cacacacacaca",
            "dadadadadada"
        ]
    },
    {
        organization : "Fluff Cake and Treats",
        location : "Phnom Penh, Cambodia",
        role: "Bakery Clerk",
        date: "January 2023 - May 2023",
        description: [
            "Working as a baker and also receiving orders from customers",
            "Bake and Design up to 20 cakes a day as a team of 3",
            "Responding to customers, sending out deliveries"
        ]
    },
    {
        organization : "National Olympic Committee of Cambodia",
        location : "Phnom Penh, Cambodia",
        role: "Language Officer (Volunterr)",
        date: "May 2023 - June 2023",
        description: [
            "Interpret as a translator for Technical Official for smooth communication with other SEA GAMES official ",
            "Able to make every agenda for all of Technical Official complete with efficiency",
            "Arranged and Interpret for President of ASEAN Swimming Federation, Secretary of ASEAN Swimming Federation and 36 official from Taekwondo Federation"
        ]
    },
    {
        organization : "Kilo IT",
        location: "Phnom Penh, Cambodia",
        role: "Front-end Trainee",
        date: "November 2023 - April 2024",
        description: [
            "Train of front-end skill using React Framework",
            "Trained on Project Management, Trello, Mindmapping",
            "Working as a team on different project"
        ]
    }
]

const initialState = {
    resume_data: resumeData,
}

const resumeSlice = createSlice({
    name:"data_resume",
    initialState,
    reducers:{
        storeResumeData:(state,action)=>{
            state.resume_data = action.payload;
        }
    }
})

export const {
    storeResumeData
} = resumeSlice;

export default resumeSlice.reducer;