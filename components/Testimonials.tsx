import Image from "next/image";
export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Student Testimonials</h2>
            <p className="mb-12 text-gray-600 mt-4">
                What our online students say
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                {
                    quote:
                    "Worldclass Tech Academy made learning tech easy and flexible. I was able to learn online while working full-time, and the projects really helped me grow.",
                    name: "Samuel Adejare.",
                    image:"/images/a.jpg",
                },
                {
                    quote:
                    "The online classes are well structured and very practical. I gained confidence and built a solid portfolio within months.",
                    name: "Aisha Omotayo.",
                    image:"/images/b.jpg",
                },
                {
                    quote:
                    "Great instructors, clear lessons, and constant support. I highly recommend Worldclass Tech Academy to anyone serious about tech.",
                    name: "Daniel Osariemen.",
                    image:"/images/c.jpg",
                },
                {
                    quote:
                    "The flexible learning options made it possible to study while working. I gained real skills and started freelancing within months!",
                    name: "Emeka Odili.",
                    image:"/images/d.jpg",
                },
                {
                    quote:
                    "Amazing environment and practical lessons. I now work as a web developer and still refer friends here.",
                    name: "Mosunmola Omotayo.",
                    image:"/images/e.jpg",
                },
                ].map((item, index) => (
                <div
                    key={index}
                    className="bg-white w-full flex justify-between items-center flex-col border border-gray-200 rounded-lg"
                >
                    <Image src={item.image} alt={item.name} width={150} height={50} className="rounded-full mt-6 mb-2"/>
                    <span className="font-bold text-[#040440]">
                   {item.name}
                    </span>
                    <div className="p-6 text-white italic bg-[#040440] border rounded-xl mt-4">
                        <p >
                    “{item.quote}”
                        </p>
                    </div>
                                        
                </div>
                ))}
            </div>
        </div>  
    </section>
  );
}
