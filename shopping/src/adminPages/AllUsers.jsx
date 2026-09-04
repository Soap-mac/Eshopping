import React, { useEffect, useState } from 'react'
import Sidebar from '../adminComponents/Sidebar'
import UserTable from '../adminComponents/UserTable'

function AllUsers() {

    const [AllUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const url = `${import.meta.env.VITE_API_URL}/allusers`;
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                console.log(response);
                const result = await response.json();
                console.log(result);
                if (result.success) {
                    console.log(result.users);
                    setAllUsers(result.users);
                    console.log(AllUsers);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    return (
        <div className="flex justify-between !h-full">

            <div className="!sticky top-1 left-0 h-screen overflow-y-auto">
                <Sidebar />
            </div>

            <div className="flex-1 h-full bg-transparent min-w-0">

                <div className="!mx-4 md:mx-6 lg:mx-10">
                    <UserTable data={AllUsers} />
                </div>
            </div>
        </div>
    )
}

export default AllUsers