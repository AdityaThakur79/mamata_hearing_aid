import { createContext } from "react";


export const AdminAppContext = createContext()

const AdminAppContextProvider = (props) => {

    const currency =  "INR"
    const backendUrl = "https://mamata-hearing-aid.onrender.com"
    // const backendUrl = "http://localhost:8080"

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Function to calculate the age eg. ( 20_01_2000 => 24 )
    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)
        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

    const value = {
        backendUrl,
        currency,
        slotDateFormat,
        calculateAge,
    }

    return (
        <AdminAppContext.Provider value={value}>
            {props.children}
        </AdminAppContext.Provider>
    )

}

export default AdminAppContextProvider