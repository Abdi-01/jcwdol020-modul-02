"use client";
import Button from "@/components/Button";
import { useRef, useState } from "react";

export default function SignIn() {
    // initialize useRef for input element
    const inUsernameRef = useRef<HTMLInputElement>(null);

    // useState : React hooks yang ditujukan untuk mengelola data yang berefek pada perubahan component
    const [stateUsername, setStateUsername] = useState<string | null>(null); // [storeValue, func_modifyValue]
    const [statePassword, setStatePassword] = useState<string | null>(null); // [storeValue, func_modifyValue]
    const [isVisible, setIsVisible] = useState<boolean>(false); // [storeValue, func_modifyValue]
    const [database, setDatabase] = useState<any[]>([]);


    function onHandleSubmit() {
        if (inUsernameRef.current) { // memeriksa apakah ada element yang saat ini terhubung dengan useRef
            console.log("Ref from username input", inUsernameRef.current.value);
            setDatabase([...database, {
                username: inUsernameRef.current.value,
                password: statePassword
            }])
        }
    }

    function printData() {
        const listUser = database.map((value: any, index: number) => {
            return <li>{value.username} {value.password}</li>
        })
        return listUser;
    }

    return <div className="py-16">
        <div className="flex flex-col border border-black w-fit p-4 rounded-2xl m-auto gap-5">
            <h2 className="text-2xl font-bold">Sign In</h2>
            {/* <h2>{stateUsername}</h2>
            <h2>{statePassword}</h2> */}
            <div className="flex flex-col">
                <label>Username</label>
                <input id="username"
                    ref={inUsernameRef}
                    type="text"
                    placeholder="Masukkan Username"
                    className="border p-1 rounded" />
            </div>
            <div className="flex flex-col">
                <label>Password</label>
                <div>
                    <input id="password"
                        type={isVisible ? "text" : "password"}
                        placeholder="Masukkan Password"
                        className="border p-1 rounded"
                        onChange={(element: any) => {
                            setStatePassword(element.target.value)
                        }} />
                    <Button title={isVisible ? "Hide" : "Show"} onClick={() => setIsVisible(!isVisible)} />
                </div>
            </div>
            <Button title="Submit" onClick={onHandleSubmit} />
        </div>
        <div className="w-fit m-auto">
            <ul >
                {printData()}
            </ul>
        </div>
    </div>
}