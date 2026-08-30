import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function UserTable(props) {
    const { data } = props;
    const users = [
        ...data.map(user => ({
            id: user.id,
            image: user.imageUrl,
            name: user.name,
            email: user.email,
            phoneNo: user.mobile
        }))
    ];
    return (
        <div className="min-h-screen bg-transparent !p-6 !mt-[20px]">
            <div className="max-w-7xl !mx-auto">
                <h3 className='text-orange-500 text-3xl font-bold !mb-8 !px-2'>All Registerd Users</h3>

                <div className="flex items-center justify-between">
                    <div className="!mr-[50px]">
                        <Box
                        >
                            <TextField sx={{
                                '& .MuiInput-input': {
                                    color: 'white' // Input text color
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1d5db' // Label color (gray-300)
                                },
                                '& .MuiInput-underline:before': {
                                    borderBottomColor: '#6b7280' // Default underline (gray-500)
                                },
                            }} id="standard-basic" label={<div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FaMagnifyingGlass />
                                <span>Search User</span>
                            </div>} variant="standard" className='!text-gray-200' />
                        </Box>
                    </div>

                </div>

                <br />

                <div className="backdrop-blur-lg bg-gray-900/40 border border-gray-700/50 rounded-2xl shadow-2xl">
                    <div className="">
                        <table className="w-full text-sm text-left overflow-hidden">
                            <thead className="text-base text-amber-100 uppercase bg-gradient-to-r from-gray-900/90 to-gray-800/90 border-b border-gray-700/50">
                                <tr>
                                    <th scope="col" className="!px-6 !py-5 font-semibold">
                                        ID
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        User Image
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        User Name
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold  text-center">
                                        User Email
                                    </th>
                                    <th scope="col" className="!px-6 !py-5 font-semibold ">
                                        User PhoneNo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr
                                        key={user.id}
                                        className={`border-b border-gray-700/30 hover:bg-gradient-to-r hover:from-gray-700/30 hover:to-gray-600/20 transition-all duration-300 transform hover:scale-[1.01] ${index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-800/10'
                                            }`}
                                    >
                                        <th scope="row" className="!px-6 !py-6 font-semibold text-amber-400 whitespace-nowrap">
                                            {user.id}
                                        </th>
                                        <td className="!px-6 !py-6">
                                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-700/30 border border-gray-600/30 shadow-lg">
                                                <img
                                                    src={user.image}

                                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                                />
                                            </div>
                                        </td>
                                        <td className="!px-6 !py-6 text-gray-200 ">
                                            <div className="font-medium text-base">
                                                {user.name}
                                            </div>
                                        </td>
                                        <td className="!px-6 !py-6 text-gray-200 ">
                                            <div className="font-medium text-base flex items-center gap-2">
                                                <IoMail />{user.email}
                                            </div>
                                        </td>
                                        <td className="!px-6 !py-6 text-gray-200">
                                            <div className="font-medium text-base flex items-center gap-2">
                                                <FaPhoneAlt />{user.phoneNo}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTable