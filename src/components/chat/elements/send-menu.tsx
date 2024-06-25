import React, { useState, useRef } from "react";
import { InputField } from "@/components/ui/input-field";
import { Mic, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";

const SendMenu: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [audioUrl, setAudioUrl] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const streamRef = useRef<MediaStream | null>(null);

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            // Handle file upload
            console.log(files[0]);
        }
    };

    const handleRecord = async () => {
        if (!isRecording) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                streamRef.current = stream;
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;
                audioChunksRef.current = [];

                mediaRecorder.ondataavailable = event => {
                    if (event.data.size > 0) {
                        audioChunksRef.current.push(event.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunksRef.current);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    setAudioUrl(audioUrl);
                    stream.getTracks().forEach(track => track.stop());
                };

                mediaRecorder.start();
                setIsRecording(true);
            } catch (err) {
                console.error("Failed to start recording", err);
            }
        } else {
            const mediaRecorder = mediaRecorderRef.current;
            if (mediaRecorder && mediaRecorder.state !== "inactive") {
                mediaRecorder.stop();
            }
            setIsRecording(false);
        }
    };

    return (
        <div className="flex gap-3 px-4 justify-center items-center rounded-3xl bg-card2 max-md:flex-wrap">
            <div className="flex flex-1 gap-3 items-center my-2 max-md:flex-wrap">
                <Button onClick={handleFileUpload} className="bg-transparent hover:bg-transparent hover:opacity-70 h-full p-0">
                    <Paperclip className="shrink-0 self-stretch my-auto w-6 aspect-square"></Paperclip>
                </Button>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
                {audioUrl ? (
                    <audio className="w-full" controls src={audioUrl} />
                ) : (<InputField
                    className="flex-1 justify-center self-stretch px-4 py-2.5 rounded-3xl border border-secondary border-solid bg-background40 max-md:max-w-full placeholder:typographySecondary"
                    placeholder="Ваше повідомлення..."
                />)}
            </div>
            <Button onClick={handleRecord} className="bg-transparent hover:bg-transparent hover:opacity-70 h-full p-0">
                <Mic className={`shrink-0 my-auto w-6 aspect-square ${isRecording ? 'text-accent' : 'text-typography'}`} />
            </Button>
        </div>
    );
}

export default SendMenu;
