
import { Headphones } from "lucide-react";

export default function ListeningPage() {

  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="text-3xl font-bold text-slate-900">
        IELTS Listening Practice
      </h1>

      <p className="mt-2 text-gray-500">
        Improve your listening skills with practice exercises.
      </p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <Headphones
          className="mb-4 text-violet-600"
          size={36}
        />

        <h2 className="text-xl font-semibold">
          Listening Test 1 — Daily Conversation
        </h2>

        <p className="mt-2 text-gray-500">
          Level: Easy | Questions: 5
        </p>

       

<div className="mt-6">
  <audio controls className="w-full">
    <source
      src="/audio/listening-test-1.mp3"
      type="audio/mpeg"
    />
    Your browser does not support audio playback.
  </audio>
</div>


      </div>
    </main>
  );
}
