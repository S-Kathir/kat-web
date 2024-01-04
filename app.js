import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <section className="w-full h-screen bg-gradient-to-r from-green-100 to-green-500 dark:from-green-900 dark:to-green-700 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl p-4">
        <h1 className="text-4xl font-bold text-center text-green-900 dark:text-green-100 mb-4">
          <span className="text-red-500">K</span>
          <span className="text-yellow-500">a</span>
          <span className="text-green-500">t</span>
          <span className="text-blue-500">-</span>
          <span className="text-indigo-500">P</span>
          <span className="text-purple-500">l</span>
          <span className="text-pink-500">a</span>
          <span className="text-red-500">y</span>
          <span className="text-yellow-500">e</span>
          <span className="text-green-500">r</span>
        </h1>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-green-800">
          <div className="p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <PlayIcon className="h-6 w-6" />
                </Button>
                <Input className="flex-1" defaultValue="50" max="100" min="0" step="1" type="range" />
              </div>
              <Button size="icon" variant="ghost">
                <Volume2Icon className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Input accept="audio/*" className="w-2/3" type="file" />
              <Button className="ml-auto">Upload</Button>
            </div>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-green-800 mt-8 w-[10cm] h-[4cm] mx-auto">
          <div className="p-4 space-y-2">
            <h2 className="text-2xl font-bold text-center text-green-900 dark:text-green-100 mb-2">Video Player</h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost">
                  <PlayIcon className="h-6 w-6" />
                </Button>
                <Input className="flex-1" defaultValue="50" max="100" min="0" step="1" type="range" />
              </div>
              <Button size="icon" variant="ghost">
                <Volume2Icon className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Input accept="video/*" className="w-2/3" type="file" />
              <Button className="ml-auto">Upload</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}


function Volume2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}
