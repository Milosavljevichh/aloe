import { Button } from "@/components/ui/button"

export default function CallCTA({bg="bg-primary-orange", arrow=1, border="border-1 shadow-md"}) {
  return (
    <Button className={"gap-0 rounded-full py-0 ps-0 text-md flex items-center uppercase font-light font-text hover:bg-primary-orange border-solid border-primary-orange  transition duration-500 hover:cursor-pointer " + bg + " " + border}>
      <div className="mx-2 flex items-center pl-1.5 w-7 h-7">
        <svg xmlns="http://www.w3.org/2000/svg" className="!w-full !h-full" fill={"#fefce8"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m19,4h-2v-2h-2v2h-6v-2h-2v2h-2c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V6c0-1.1-.9-2-2-2ZM5,20v-12h14v-2,14s-14,0-14,0Z"></path><path d="M7 11H9V13H7z"></path><path d="M11 11H13V13H11z"></path><path d="M15 11H17V13H15z"></path><path d="M7 15H9V17H7z"></path><path d="M11 15H13V17H11z"></path><path d="M15 15H17V17H15z"></path></svg>
      </div>Zakaži poziv {arrow && <span className="ml-2 p-0.5 border-solid border-1 border-primary-white/50 rounded-full"><svg  xmlns="http://www.w3.org/2000/svg" width={128} height={128} fill={"#fefce8"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m9.71 17.71 5.7-5.71-5.7-5.71-1.42 1.42 4.3 4.29-4.3 4.29z"></path></svg></span>}
          </Button>
  );
}
