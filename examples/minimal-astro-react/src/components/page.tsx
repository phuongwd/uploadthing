import { generateUploadButton } from "@uploadthing/react";

import type { OurFileRouter } from "../server/uploadthing";

export const UploadButton = generateUploadButton<OurFileRouter>();

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  gap-16 p-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-center text-4xl font-bold">
          {`Upload a file using a button:`}
        </span>

        <UploadButton
          endpoint="videoAndImage"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error: Error) => {
            console.log(error.stack);
            alert(`ERROR! ${error.message}`);
          }}
        />
      </div>
    </main>
  );
}
