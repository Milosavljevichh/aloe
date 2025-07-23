import { Button } from "../ui/button"

export default function Hero() {
    return (
        <section className="
            box-border
            relative
            h-[90vh]
            w-full
            mx-auto
            bg-[url(/aloe_product_cropped.png)]
            bg-cover
            bg-bottom bg-fixed
            rounded-b-4xl
        ">
            <div className="absolute inset-0 bg-black/50 z-0 h-full w-full rounded-b-4xl" />
            <svg className="z-90 absolute bottom-6 left-1/2 -translate-x-1/2"  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"#ffffff"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m12 15.59-4.29-4.3-1.42 1.42 5.71 5.7 5.71-5.7-1.42-1.42z"></path><path d="m12 10.59-4.29-4.3-1.42 1.42 5.71 5.7 5.71-5.7-1.42-1.42z"></path></svg>
            {/* <hr className="absolute bottom-21 left-1/2 -translate-x-1/2 w-full max-w-6xl z-9 h-[3px] mx-auto" /> */}
            <div className="relative h-full w-full max-w-6xl mx-auto flex flex-col items-start justify-center text-[#F8F8FF] z-1">
                <h1 className="text-6xl mb-2 font-medium font-header">Lorem ipsum</h1>
                <h1 className="text-6xl mb-5 font-medium font-header">dolor sit amet tempo</h1>
                <h2 className="text-2xl mb-6 max-w-[40%] opacity-90 font-light font-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                <div className="flex items-center justify-center gap-4">
                    <Button className={"bg-transparent border-[1px] border-solid border-[#F8F8FF] hover:bg-[#F8F8FF] hover:text-black transition duration-500 hover:cursor-pointer"}>
                        <span className="flex items-baseline gap-2">
                            All Products
                        </span>
                    </Button>
                    <Button className={"bg-transparent border-[1px] border-solid border-[#F8F8FF] hover:bg-[#F8F8FF] hover:text-black transition duration-500 hover:cursor-pointer"}>
                        <span className="flex items-baseline gap-2">
                            About Forever
                        </span>
                    </Button>
                    <Button className={"bg-transparent border-[1px] border-solid border-[#F8F8FF] hover:bg-[#F8F8FF] hover:text-black transition duration-500 hover:cursor-pointer"}>
                        <span className="flex items-baseline gap-2">
                            Contact
                        </span>
                    </Button>
                </div>
            </div>
        </section>
    )
}