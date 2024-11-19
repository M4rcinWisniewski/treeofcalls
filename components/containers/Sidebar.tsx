"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Button } from "../ui/button";


type DefaultType = {
    JavaScript: string;
};

export default function Sidebar() {
    // default code displayed in users editor
    const defaultCode: DefaultType = {
        JavaScript: `function f(n) {
    if (n === 0) {
        return 1;  
    }
    return n * f(n - 1);   
}
    
f(5) // remember to call your function!`
    };
    const [code, setCode] = useState<string>(defaultCode.JavaScript); 
    const [result, setResult] = useState<number>();

    // handles state of code provided by user, is called everytime user changes value in the editor
    const handleChange = (value: string | undefined) => {
        setCode(value || "");
      };


    return (
        <div className="h-[100vh] flex items-left flex-col text-white gap-10">
            {/* Monaco Editor */}
            <div 
            className="
                rounded-lg
                overflow-hidden 
                border border-[#202020]
            ">
                <Editor
                    height="30vh"
                    theme="vs-dark"
                    defaultLanguage="javascript"
                    value={code}
                    onChange={handleChange}
                    options={{
                        fontSize: 14,
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                    }}
                />

            </div>
            <Button variant="secondary" onClick={() => setResult(eval(code))}>Execute function</Button>
            <h1>Result: {result}</h1> {/*showes the result of provided function*/}
        </div>
    );
}
